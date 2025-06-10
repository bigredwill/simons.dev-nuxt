It's a nice stack. Super fast to prototype a project, and I think that the stack would scale nicely. 


## Overview

Supabase is an open-source Firebase alternative. It's essentially a really nice wrapper around a Postgres database. You can host a Supabase server yourself, or they offer a hosted version with a generous free tier.

Clerk is an authentication provider that simplifies logins. They handle OAuth and email verification flows. Which, when you are building an MVP, is nice to not battle.


## Integration with React Context
Both Supabase and Clerk have integration guides -> the Clerk one is more up to date.

It gets you there minimally. We can make the setup a bit nicer by creating a Supabase context that handles authentication easily.

Essentially, the Supabase/Clerk integration expects the Clerk session token in the header. Their docs indicate that we alter the `fetch` function that Supabase uses to pass that token in the `Authorization` header

```typescript
createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
      {
        global: {
          fetch: async (url, options = {}) => {
	        // get Clerk token
            const clerkToken = await session?.getToken({
              template: "supabase",
              skipCache: true
            });
			// pass Clerk token to header
            const headers = new Headers(options?.headers);
            headers.set("Authorization", `Bearer ${clerkToken}`);

            return fetch(url, {
              ...options,
              headers,
            });
          },
        },
      },
    );
```

### Reusing Clerk integrated Supabase client
To reuse this client, and because Clerk session is coming from the ClerkProvider, lets set up another React context as a child of ClerkProvider:

```typescript
import React, { createContext, useContext, useMemo } from "react";
import { useSession } from "@clerk/nextjs";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@/database.types";

const SupabaseContext = createContext<SupabaseClient<Database> | null>(null);

interface SupabaseProviderProps {
  children: React.ReactNode;
}

export const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
  children,
}) => {
  const { session } = useSession();

  const supabaseClient = useMemo(() => {
    return createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
      {
        global: {
          fetch: async (url, options = {}) => {
            const clerkToken = await session?.getToken({
              template: "supabase",
              skipCache: true
            });

            const headers = new Headers(options?.headers);
            headers.set("Authorization", `Bearer ${clerkToken}`);

            return fetch(url, {
              ...options,
              headers,
            });
          },
        },
      },
    );
  }, [session]);
  return (
    <SupabaseContext.Provider value={supabaseClient || null}>
      {children}
    </SupabaseContext.Provider>
  );
};

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (!context) {
    throw new Error("useSupabase must be used within a SupabaseProvider");
  }
  return context;
};

```



https://github.com/clerk/javascript/issues/1528

https://kagi.com/search?q=clerk+Cookie+%E2%80%9C__client_uat%E2%80%9D+has+been+rejected+for+invalid+domain.+touch+Cookie+%E2%80%9C__client_uat_8hqYrFIw%E2%80%9D+has+been+rejected+for+invalid+domain.

https://clerk.com/docs/integrations/databases/supabase#test-your-integration

https://clerk.com/docs/references/javascript/session#get-token