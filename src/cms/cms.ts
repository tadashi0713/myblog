import CMS from "netlify-cms";

import "./style.css";

import PagePreview from "./preview-templates/page-preview";
import PostPreview from "./preview-templates/post-preview";

CMS.registerPreviewTemplate("pages", PagePreview);
CMS.registerPreviewTemplate("posts", PostPreview);
