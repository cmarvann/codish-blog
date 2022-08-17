const { Cherry } = require('../models');

const paintingdata = [
  {
    title: 'First Rank',
    photographer: 'Bill Raftery',
    taken_date: 'April 12, 2019',
    user_id: 6,
    post_url: 'https://www.flickr.com/photos/138296147@N05/40642589123/in/photolist-24VrTMe-uwcqiC-co8D6Q-co8BEj-GovqXR-xjAGXF-2evuYk1-2e9kvrB-6pYwF1-saeoS3-2ecXCiS-d6FqKU-rZmRop-nv43vL-ed6guY-SNisf9-2fs1hdR-25mkEhG-5FjTcD-tYrErY-TZG2NV-ea3tAm-2fs1htv-2fnm3n5-23H66QG-9AP4x7-edQQot-9ALbm6-24QrGKK-STWwsx-TrDtXS-6pYvfJ-Fph2o2-ecZDGv-ecZBYt-ed6h6S-ecZB9t-xtH3ZN-23Tt4K5-2etERLS-25wU5AC-2dUZ5Pt-2fB5p9x-ncvMoA-2dUZ646-npV2r7-24GDvUa-y8hoh7-Ft491o-v8GFXj/',
    site_id: 1,
    description:
      'Cherry Blossom Branch Brook Park #2.',
  },
  {
    title: 'Second Rank',
    photographer: 'Unknown',
    taken_date: 'April 15, 2022',
    user_id: 5,
    post_url: 'http://cherryblossomsincherryhillnj.yolasite.com/photos---cherry-blossoms.php',
    site_id: 2,
    description:
      'Cherry Hill city display.',
  },
  {
    title: 'Third Rank',
    photographer: 'Jenn / SunnyDazzled',
    taken_date: 'April 5, 2020',
    user_id: 4,
    post_url: 'https://www.flickr.com/photos/sunnydazzled/49778092628/in/photolist-2iQHJGm-2jYKJ2Z-2k3v1WV-2db3djC-27A7VeQ-2k3K7Mb-2k1curK-2k46zFp-2jXsANq-J1xVtH-2jZSn3u-KwEstu-RJ5Mdt-2k2bp8o-2jZ8VQu-2k2xrkr-2ceFdTS-2k2RZ7o-2jY8cnn-2jYokWy-2k2WrYa-JWTMam-H5rjTV-2k4jydq-2jRHvnS-2k4oY9C-2gsSFff-DVJbc6-23EtiJZ-2hwHDey-GZpLMa-2k46zzC-2jXPkbW-J7cwQe-2jZAr4F-2k1wXZA-2k3vGyG-2jY8bqh-CavKXk-2jZwJ2t-RJ5GbK-2gUZtnS-2k2xrfw-2jmGGJu-2k3dXvi-FMbrsc-2jXJQcn-G1WEdh-2k3v1Mb-2dpnGr6',
    site_id: 3,
    description:
      'Spring.',
  },
  {
    title: 'Fourth Rank',
    photographer: 'Unknown',
    taken_date: 'April 15, 2022',
    user_id: 3,
    post_url: 'https://www.veronapark.org/',
    site_id: 4,
    description:
      'The city park post.',
  },
  {
    title: 'Fifth Rank',
    photographer: 'Jacki',
    taken_date: 'April 22, 2007',
    user_id: 2,
    post_url: 'https://www.flickr.com/photos/justbelightful/468893166/in/photolist-HrcAW-214QkoN-7eKTYe-dmfL9u-om7efX-4QhJS4-214Qjn9-214QjNQ-o4UfLY-214Qju3-AZuJ9j-YLCCNW-Hki3zk-4KiMFH-6jWjP-C4p7CL-26Vk4Kh-9LpXR1-AQNYDX-aQR4jT-7dUJ3m-aQR5Rz-4GzcnC-BkSsTG-27LeAXA-ALnmKD-oEzqd5-dS519v-4KdPDW-2ijipot-DM8uc-ovtY49-oKWRcw-aQR5hF-ovuUf2-ySGDDE-z9gDVE-zb8HJp-z68jGs-z9pAAv-FUmgUm-hMUpQC-iTTyxs-NNnB3p-MEELeN-4atunY-4K9y2V-NkPHwS-NNnyxV-gAuEi',
    site_id: 5,
    description:
      'Cherry cherry Blossom scene.',
  },
  {
    title: 'Sixth Rank',
    photographer: 'Unknown',
    taken_date: 'April 15, 2022',
    user_id: 1,
    post_url: 'https://www.monmouthcountyparks.com/page.aspx?id=2763',
    site_id: 6,
    description:
      'State Park image.',
  },
  {
    title: 'Seventh Rank',
    photographer: 'John',
    taken_date: 'May 01, 2009',
    user_id: 10,
    post_url: 'https://www.flickr.com/photos/ambientphoto/3492491160/in/photolist-6jBVWQ-7SLgZr-25nr2rQ-9vn1fz-7RvKcd-nn6Pb4-rmD3sL-2gbc1fS-nnrUvg-ahNjhx-xtCta1-xcQ8E9-aigtPt-ahRkyL-wxqXTJ-aj9gkd-ahRpEC-aigH2X-aj9kyC-ahRcmS-ahRpNd-aj6yZZ-aizNZo-aiM5yi-aj6uhx-ai66EM-wxqXR9-2fB5oEB-wxqXXm-26AdkxC-x25MVf-xcWEHi-7Tk8uK-25ytYeq-58tFFv-xcQ8B3-4Hyj1j-25ytSQE-25ytScq-26AdmnJ-25ytSts-26Adkqd-25ytRd1-25ytSxL-26Adktj-26AdnNu-26AdiYW-wpyQuY-wpGT3M-4FsH3C',
    site_id: 7,
    description:
      'St Catherines Church.',
  },
  {
    title: 'Eight Rank',
    photographer: 'Unknown',
    taken_date: 'April 15, 2020',
    user_id: 9,
    post_url: 'https://www.preservationnj.org/listings/rahway-river-park/',
    site_id: 8,
    description:
      'City park post.',
  },
  
  {
    title: 'Ninth Rank',
    photographer: 'Dave Aragona',
    taken_date: 'April 15, 2012',
    user_id: 7,
    post_url: 'https://www.flickr.com/photos/30255311@N02/6936469102/in/photolist-byXdAS-BhozwP-86DjDF-byXiWy-byXsyJ-efSj8i-aUvH5X-BNANv7-7UTQDL-7U3ppW-eaCL63-9AuF8V-ea4eAz-bvH8Ph-ed6mk8-egxuy7-7TawQq-ebUGQR-7Ti614-ATuk4F-bJCay4-rX1qtZ-rWTsTo-9Eu73j-7TZazZ-ATorGo-sdgyoo-ebLFZS-nkZUcG-9AuBB8-aUvM8R-ebUHfi-bvHn7U-7RDkSz-7UQyV8-ec1p67-9zYJbS-9Eu8xw-9Eqvu4-9zSeZX-7T7hSn-9ShXbw-scaCHo-9zRLxT-ebULFn-7UQuNR-9EtDWd-4sdmf6-9ShqTy-9EtBaw ',
    site_id: 9,
    description:
      'Cherry Blossoms at the Arboretum.',
  },
  {
    title: 'Tenth Rank',
    photographer: 'Unknown',
    taken_date: 'April 15, 2020',
    user_id: 6,
    post_url: 'https://www.reeves-reedarboretum.org/visit/',
    site_id: 10,
    description:
      'City Park post.',
  },
  {
    title: 'Eleventh Rank',
    photographer: 'loraineltai',
    taken_date: 'April 28, 2015',
    site_id: 4,
    post_url: 'https://www.flickr.com/photos/loraineltai/17291072476/in/photolist-JGWnD-nrgTEE-cog9VL-Lrnph-JGX3B-3BdN2x-JGLwY-Lrrrn-Lrkqo-nHLjoC-7YSNUj-bwuvt9-fsQ6qy-niokpt-skXgrf-eddybf-cogi55-bKpgUR-bKpgpM-bKLRix-Lrro9-9B3tHR-9BpYbB-7Uwf8x-7YPA5M-9B6sRm-9Bq17M-bKLQMH-7YPvft-sf8eYG-rZXEbr-shq7Eg-niGRWs-9B6nFf-9B6kTb-shnuXe-shqnyz-9B6nu9-cgLefq-9B3toa-ed7Ubz-cgLdno-7YSNiy-9B3sYg-7YPzXk-9B6rPy-7YPzRe-9tRmZK-bKpgmK-7YSMTJ',
    site_id: 11,
    description:
      'Sayyen House and Gardens.',
  },
];

const seedCherrys = () => Cherry.bulkCreate(cherrydata);

module.exports = seedCherrys;
