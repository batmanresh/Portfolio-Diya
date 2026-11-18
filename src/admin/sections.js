// What the admin panel lets you edit, section by section.
// To make something new editable: add a field here, add a default value in
// content/defaults.js, and read it in the component with getContent().
//
// Field types:
//   text      single line
//   textarea  paragraph
//   lines     a list of short items, one per line
//   color     color picker
//   select    dropdown (needs `options`)
//   image     image URL + upload button
//   video     video URL + upload button
//   file      any file URL + upload button (e.g. PDF)
//   list      repeatable group of fields (add / remove / reorder)

const sections = [
  {
    key: 'showcase',
    title: 'Featured Showcase',
    description: 'Your visual first impression. Add photos or videos, choose their shape and tell a little story.',
    fields: [
      { key: 'items', label: 'Showcase moments', type: 'list', itemName: 'showcase item', titleKey: 'title',
        fields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'category', label: 'Small category line', type: 'text' },
          { key: 'src', label: 'Photo or video', type: 'media' },
          { key: 'type', label: 'Media type', type: 'select', options: ['auto', 'video', 'image'] },
          { key: 'thumbnail', label: 'Video thumbnail / poster (optional)', type: 'image' },
          { key: 'shape', label: 'Card shape', type: 'select', options: ['wide', 'portrait', 'square'] },
          { key: 'href', label: 'Optional link', type: 'text' },
        ],
      },
    ],
  },
  {
    key: 'hero',
    title: 'Hero',
    description: 'The top of the page: intro text and the scrolling brand logos.',
    fields: [
      { key: 'eyebrow', label: 'Small line above the headline', type: 'text' },
      { key: 'intro', label: 'Intro paragraph', type: 'textarea' },
      {
        key: 'logos', label: "Brands I've worked with", type: 'list', itemName: 'logo',
        fields: [{ key: 'image', label: 'Logo', type: 'image' }],
      },
    ],
  },
  {
    key: 'about',
    title: 'About',
    description: 'Your story and skills.',
    fields: [
      { key: 'note', label: 'Short note under the heading (location, availability)', type: 'textarea' },
      { key: 'intro', label: 'Main paragraph (large text)', type: 'textarea' },
      { key: 'body', label: 'Second paragraph', type: 'textarea' },
      {
        key: 'skills', label: 'Skill groups', type: 'list', itemName: 'skill group', titleKey: 'label',
        fields: [
          { key: 'label', label: 'Group name', type: 'text' },
          { key: 'items', label: 'Skills (one per line)', type: 'lines' },
        ],
      },
    ],
  },
  {
    key: 'work',
    title: 'Work',
    description: 'Projects shown in Selected Work. Add photos and videos to each project gallery.',
    fields: [
      {
        key: 'industries', label: 'Industries', type: 'list', itemName: 'industry', titleKey: 'label',
        fields: [
          { key: 'label', label: 'Industry name', type: 'text' },
          { key: 'headline', label: 'Headline', type: 'text' },
          { key: 'client', label: 'Client', type: 'text' },
          { key: 'role', label: 'Your role (leave empty to hide)', type: 'text' },
          { key: 'color', label: 'Accent color', type: 'color' },
          { key: 'cover', label: 'Cover image', type: 'image' },
          { key: 'summary', label: 'Summary', type: 'textarea' },
          { key: 'result', label: 'Result (leave empty to hide)', type: 'textarea' },
          { key: 'subcats', label: 'Filter tags shown in the gallery (one per line)', type: 'lines' },
          {
            key: 'videos', label: 'Project gallery · photos & videos', type: 'list', itemName: 'media item', titleKey: 'caption',
            fields: [
              { key: 'caption', label: 'Caption', type: 'text' },
              { key: 'href', label: 'Instagram link', type: 'text' },
              { key: 'preview', label: 'Photo or video file', type: 'media' },
              { key: 'thumbnail', label: 'Custom thumbnail / poster (optional)', type: 'image' },
              { key: 'type', label: 'Media type', type: 'select', options: ['video', 'image'] },
              { key: 'orientation', label: 'Shape', type: 'select', options: ['landscape', 'portrait'] },
              { key: 'tags', label: 'Tags (one per line; should match the filter tags above)', type: 'lines' },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'results',
    title: 'Results & Experience',
    description: 'Numbers, testimonials, work history and your resume.',
    fields: [
      {
        key: 'metrics', label: 'Key numbers', type: 'list', itemName: 'number', titleKey: 'value',
        fields: [
          { key: 'value', label: 'Number (e.g. 650%)', type: 'text' },
          { key: 'label', label: 'What it means', type: 'textarea' },
          { key: 'context', label: 'Where (brand / area)', type: 'text' },
        ],
      },
      {
        key: 'testimonials', label: 'Testimonials', type: 'list', itemName: 'testimonial', titleKey: 'name',
        fields: [
          { key: 'name', label: 'Name', type: 'text' },
          { key: 'title', label: 'Their job title', type: 'text' },
          { key: 'relation', label: 'How you worked together', type: 'text' },
          { key: 'image', label: 'Photo', type: 'image' },
          { key: 'quote', label: 'Quote', type: 'textarea' },
        ],
      },
      {
        key: 'experience', label: 'Experience', type: 'list', itemName: 'job', titleKey: 'role',
        fields: [
          { key: 'role', label: 'Role', type: 'text' },
          { key: 'company', label: 'Company', type: 'text' },
          { key: 'year', label: 'Years (e.g. 2024 — Present)', type: 'text' },
          { key: 'desc', label: 'Description', type: 'textarea' },
        ],
      },
      { key: 'resumeUrl', label: 'Resume (PDF)', type: 'file', accept: 'application/pdf' },
    ],
  },
  {
    key: 'contact',
    title: 'Contact',
    description: 'How people reach you.',
    fields: [
      { key: 'email', label: 'Email', type: 'text' },
      { key: 'linkedin', label: 'LinkedIn URL', type: 'text' },
    ],
  },
];

export default sections;
