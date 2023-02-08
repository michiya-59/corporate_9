'use strict'

window.addEventListener('load', () => {
  // ページの各要素
  const header_menu = document.getElementById('header');
  const concept_title = document.getElementById('concept_title');
  const concept_subtitle = document.getElementById('concept_subtitle');
  const concept_explanation_p = document.getElementById('concept_explanation_p');
  const concept_explanation_img = document.getElementById('concept_explanation_img');
  const concept_title2 = document.getElementById('concept_title2');
  const works_title = document.getElementById('works_title');
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  const image3 = document.getElementById('image3');
  const work_title2 = document.getElementById('work_title2');
  const service_title = document.getElementById('service_title');
  const work_item1 = document.getElementById('work_item1');
  const work_item2 = document.getElementById('work_item2');
  const work_item3 = document.getElementById('work_item3');
  const service_subtitle = document.getElementById('service_subtitle');
  const contact_title = document.getElementById('contact_title');
  const contact_subtitle = document.getElementById('contact_subtitle');
  
  // workの部分

  window.addEventListener('scroll', () => {
    // conceptの部分
    const header_menu_scroll = header_menu.getBoundingClientRect().top;
    const concept_title_scroll = concept_title.getBoundingClientRect().top;
    const concept_subtitle_scroll = concept_subtitle.getBoundingClientRect().top;
    const concept_explanation_text_scroll = concept_explanation_p.getBoundingClientRect().top;
    const concept_explanation_img_scroll = concept_explanation_img.getBoundingClientRect().top;
    const concept_title2_scroll = concept_title2.getBoundingClientRect().top;
    const works_title_scroll = works_title.getBoundingClientRect().top;
    const image1_scroll = image1.getBoundingClientRect().top;
    const image2_scroll = image2.getBoundingClientRect().top;
    const image3_scroll = image3.getBoundingClientRect().top;
    const work_title2_scroll = work_title2.getBoundingClientRect().top;
    const service_title_scroll = service_title.getBoundingClientRect().top;
    const work_item1_scroll = work_item1.getBoundingClientRect().top;
    const work_item2_scroll = work_item2.getBoundingClientRect().top;
    const work_item3_scroll = work_item3.getBoundingClientRect().top;
    const service_subtitle_scroll = service_subtitle.getBoundingClientRect().top;
    const contact_title_scroll = contact_title.getBoundingClientRect().top;
    const contact_subtitle_scroll = contact_subtitle.getBoundingClientRect().top;
    
    fadeIn(concept_title, concept_title_scroll);
    fadeIn(concept_subtitle, concept_subtitle_scroll);
    fadeIn(concept_explanation_p, concept_explanation_text_scroll);
    fadeIn(concept_explanation_img, concept_explanation_img_scroll);
    fadeIn(concept_title2, concept_title2_scroll);
    fadeIn(works_title, works_title_scroll);
    fadeIn(image1, image1_scroll);
    fadeIn(image2, image2_scroll);
    fadeIn(image3, image3_scroll);
    fadeIn(work_title2, work_title2_scroll);
    fadeIn(service_title, service_title_scroll);
    fadeIn(work_item1, work_item1_scroll);
    fadeIn(work_item2, work_item2_scroll);
    fadeIn(work_item3, work_item3_scroll);
    fadeIn(service_subtitle, service_subtitle_scroll);
    fadeIn(contact_title, contact_title_scroll);
    fadeIn(contact_subtitle, contact_subtitle_scroll);

    header_background_change(header_menu, header_menu_scroll, concept_title_scroll);
  });
  
  
  function fadeIn(ele, ele_scroll){
    //ブラウザの高さを取得
    const window_height = window.innerHeight;

    if (window_height > ele_scroll + 100){
      ele.classList.add('active');
    }
  }

  function header_background_change(header_menu, header_menu_scroll, concept_title_scroll){
    if(header_menu_scroll > concept_title_scroll - 100){
      header_menu.classList.add('active');
    }else{
      if(header_menu.classList.contains('active')){
        header_menu.classList.remove('active');
      }
    }
  }
});
      