'use strict';
import _blogData from '../src/public/blog-data.json' with { type: 'json' };
import  _siteconfig from '../src/lib/constant/siteconfig.json'  with {type:'json'}
/** @type {import('./lib/types/blog').BlogData} */
export const blogData = _blogData;
/** @type {import('./lib/types/siteconfig').SiteConfig} */
export const siteConfig=_siteconfig