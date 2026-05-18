# WEB103 Prework - *Creatorverse*

Submitted by: **Govinda Awasthi**

About this web app: **Creatorverse is a React web app where users can view, add, edit, and delete their favorite content creators. The app stores creator information in a Supabase database and displays creators with their name, channel link, description, and optional image.**

Time spent: **8-10** hours

## Required Features

The following **required** functionality is completed:
<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->
- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [ ] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [ ] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [x] Added React Router navigation between homepage, add creator page, detail page, and edit page.
* [x] Added a clean dark-themed layout for the app.

## Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿<img src='walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->

GIF created with Lice Cap 



## Notes

Overall, I was able to understand most parts of the project as I worked through it step by step, but some parts were more challenging than others. The hardest part was connecting the different pieces together, especially understanding how React Router, Supabase, and CRUD operations work as one full app. For example, using dynamic routes like `/creator/:id` and `/edit/:id` was challenging at first because I had to understand how the ID from the URL connects to a specific row in the Supabase database. Managing form state in React was also a little difficult because each input needed to update the correct value before sending the data to Supabase. This project helped me understand how a real frontend app communicates with a database and how create, read, update, and delete operations work in practice.

## License

Copyright [2026] [Govinda Awasthi]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.