---
date: 2024-06-17
---

## Current Location: Edge Esmeralda, Drafts and Demo weekend.
- Decided to work more on project, because there are some machine learning domain experts here.
- Used Roboflow auto labeler to begin labeling. 1 frame per second, for a total of 174 images. 
- Only label applied is `train-car`. This allows further image processing and analysis to be done in separate pipeline, ideally using a VLM.

### Goals for weekend
- Count cars, extract one image per train car. Output some stats.
- Create 1 minute demo video
- Write philosophy about of visual sampling.
- create video with song

## Outcome
- Counted some train cars. It's not perfect, likely need more/better training data. Using a custom trained YOLOv8 model to recognize individual `train-cars`
	- ![](annotated_output_video%201.mov)
- Created a remix of [Bremer/McCoy – Op](https://www.youtube.com/watch?v=gdJwssRvnzs),
	<iframe width="560" height="315" src="https://www.youtube.com/embed/pE8eoSjcZBA?si=mOFexNnDjez4oFQu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
	
