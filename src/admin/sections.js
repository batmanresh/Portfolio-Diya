// Simple content studio schema. Each section maps directly to one site_content row.
const mediaFields=[
 {key:'caption',label:'Title / caption',type:'text'},
 {key:'preview',label:'Photo or video',type:'media'},
 {key:'thumbnail',label:'Custom thumbnail / video poster (optional)',type:'image'},
 {key:'type',label:'Media type',type:'select',options:['auto','image','video']},
 {key:'orientation',label:'Layout',type:'select',options:['landscape','portrait','square']},
 {key:'tags',label:'Categories (one per line)',type:'lines'},
 {key:'href',label:'Original post / project link (optional)',type:'text'},
];
const sections=[
 {key:'showcase',title:'Featured showcase',description:'Add the photos and films that appear in the visual diary. Upload files, add a title, and drag items into the order you want.',fields:[
  {key:'items',label:'Showcase pieces',type:'list',itemName:'piece',titleKey:'title',fields:[
   {key:'title',label:'Title',type:'text'},
   {key:'category',label:'Small category label',type:'text'},
   {key:'src',label:'Photo or video',type:'media'},
   {key:'thumbnail',label:'Custom thumbnail / video poster',type:'image'},
   {key:'type',label:'Media type',type:'select',options:['auto','image','video']},
  ]}
 ]},
 {key:'hero',title:'Homepage intro',description:'Your opening statement and brand marks.',fields:[
  {key:'eyebrow',label:'Small intro line',type:'text'},
  {key:'intro',label:'Intro paragraph',type:'textarea'},
  {key:'logos',label:'Brand logos',type:'list',itemName:'logo',fields:[{key:'image',label:'Logo image',type:'image'}]}
 ]},
 {key:'about',title:'About & skills',description:'Your story, positioning and skill groups.',fields:[
  {key:'note',label:'Short availability / location note',type:'textarea'},
  {key:'intro',label:'Main introduction',type:'textarea'},
  {key:'body',label:'Supporting paragraph',type:'textarea'},
  {key:'skills',label:'Skill groups',type:'list',itemName:'skill group',titleKey:'label',fields:[
   {key:'label',label:'Group title',type:'text'},{key:'items',label:'Skills (one per line)',type:'lines'}
  ]}
 ]},
 {key:'work',title:'Selected work',description:'Each project becomes a card. Open a project to edit its story and its photo / video gallery. Keep categories consistent with the media tags.',fields:[
  {key:'industries',label:'Projects',type:'list',itemName:'project',titleKey:'label',fields:[
   {key:'label',label:'Project / client name',type:'text'},
   {key:'headline',label:'Short creative headline',type:'text'},
   {key:'client',label:'Client / brand',type:'text'},
   {key:'role',label:'Your role',type:'text'},
   {key:'cover',label:'Project cover image',type:'image'},
   {key:'summary',label:'The brief / story',type:'textarea'},
   {key:'result',label:'Results / impact',type:'textarea'},
   {key:'subcats',label:'Project categories (one per line)',type:'lines'},
   {key:'videos',label:'Project gallery · photos & videos',type:'list',itemName:'gallery item',titleKey:'caption',fields:mediaFields}
  ]}
 ]},
 {key:'results',title:'Results & experience',description:'Proof, testimonials, work history and CV.',fields:[
  {key:'metrics',label:'Key numbers',type:'list',itemName:'metric',titleKey:'value',fields:[
   {key:'value',label:'Number',type:'text'},{key:'label',label:'What it means',type:'textarea'},{key:'context',label:'Brand / context',type:'text'}
  ]},
  {key:'testimonials',label:'Testimonials',type:'list',itemName:'testimonial',titleKey:'name',fields:[
   {key:'name',label:'Name',type:'text'},{key:'title',label:'Job title',type:'text'},{key:'relation',label:'Working relationship',type:'text'},{key:'image',label:'Photo',type:'image'},{key:'quote',label:'Quote',type:'textarea'}
  ]},
  {key:'experience',label:'Experience',type:'list',itemName:'role',titleKey:'role',fields:[
   {key:'role',label:'Role',type:'text'},{key:'company',label:'Company',type:'text'},{key:'year',label:'Dates',type:'text'},{key:'desc',label:'Description',type:'textarea'}
  ]},
  {key:'resumeUrl',label:'Resume PDF',type:'file',accept:'application/pdf'}
 ]},
 {key:'contact',title:'Contact',description:'Where people can reach you.',fields:[
  {key:'email',label:'Email address',type:'text'},{key:'linkedin',label:'LinkedIn URL',type:'text'}
 ]}
];
export default sections;
