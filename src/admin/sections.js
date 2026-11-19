// Content studio fields for the editorial portfolio.
const mediaFields=[
 {key:'caption',label:'Caption',type:'text'},
 {key:'preview',label:'Photo or video',type:'media'},
 {key:'thumbnail',label:'Custom thumbnail / video poster (optional)',type:'image'},
 {key:'type',label:'Media type',type:'select',options:['auto','image','video']},
 {key:'orientation',label:'Image shape',type:'select',options:['landscape','portrait','square']},
 {key:'tags',label:'Categories (one per line)',type:'lines'},
 {key:'href',label:'Published link (optional)',type:'text'},
];
const sections=[
 {key:'showcase',title:'Featured showcase',description:'Control the lookbook’s copy, colours and every image or film. Upload, reorder and edit frames here.',fields:[
  {key:'topLeft',label:'Top left eyebrow',type:'text'},
  {key:'topRight',label:'Top right descriptor',type:'text'},
  {key:'kicker',label:'Small heading above title',type:'text'},
  {key:'titleLineOne',label:'Main title — first line',type:'text'},
  {key:'titleLineTwo',label:'Main title — italic line',type:'text'},
  {key:'intro',label:'Intro paragraph',type:'textarea'},
  {key:'bgColor',label:'Section background',type:'color'},
  {key:'textColor',label:'Main text colour',type:'color'},
  {key:'accentColor',label:'Accent colour',type:'color'},
  {key:'cardColor',label:'Media placeholder colour',type:'color'},
  {key:'footerLeft',label:'Footer left text',type:'text'},
  {key:'footerRight',label:'Footer right text',type:'text'},
  {key:'items',label:'Editorial frames',type:'list',itemName:'frame',titleKey:'title',fields:[
   {key:'title',label:'Editorial caption',type:'text'},
   {key:'category',label:'Credit / category line',type:'text'},
   {key:'src',label:'Photo or video',type:'media'},
   {key:'thumbnail',label:'Custom thumbnail / video poster',type:'image'},
   {key:'type',label:'Media type',type:'select',options:['auto','image','video']},
   {key:'shape',label:'Preferred crop',type:'select',options:['wide','portrait','square']},
  ]}
 ]},
 {key:'hero',title:'Cover / homepage',description:'The opening statement and brand marks.',fields:[
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
 {key:'work',title:'Selected work',description:'Each project is an editorial case study. Add the cover, the story, your creative process and the photos or films that bring the work to life.',fields:[
  {key:'industries',label:'Projects',type:'list',itemName:'project',titleKey:'label',fields:[
   {key:'label',label:'Project title',type:'text'},
   {key:'headline',label:'Editorial headline',type:'text'},
   {key:'client',label:'Client / brand',type:'text'},
   {key:'role',label:'Your role',type:'text'},
   {key:'cover',label:'Main project cover image',type:'image'},
   {key:'summary',label:'The brief / project story',type:'textarea'},
   {key:'objective',label:'The objective (optional)',type:'textarea'},
   {key:'storyboard',label:'Creative direction / storyboard notes',type:'textarea'},
   {key:'pullQuote',label:'A short pull quote (optional)',type:'text'},
   {key:'result',label:'Results / impact',type:'textarea'},
   {key:'subcats',label:'Project categories (one per line)',type:'lines'},
   {key:'videos',label:'Photo & video gallery',type:'list',itemName:'creative asset',titleKey:'caption',fields:mediaFields}
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
  ]}
 ]},
 {key:'contact',title:'Contact',description:'Where people can reach you.',fields:[
  {key:'email',label:'Email address',type:'text'},{key:'linkedin',label:'LinkedIn URL',type:'text'}
 ]}
];
export default sections;
