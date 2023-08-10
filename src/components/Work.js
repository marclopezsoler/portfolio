import { motion } from "framer-motion";
import React from "react";
import WorkText from "../subcomponents/WorkText";
import "./Work.scss";
import { Helmet } from "react-helmet";

function Work() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });

  document.onmousemove = function(e) {
    document.body.style.setProperty('--x',(e.clientX)+'px');
    document.body.style.setProperty('--y',(e.clientY)+'px');
  }

  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Helmet>
        <title>marc lópez portfolio | work</title>
      </Helmet>
      <div className="work-parent">
        <section className="work-child-1">
          <div className="tags">
            <a href="#personal">personal</a>
            <a href="#uni">uni</a>
            <a href="#work">work</a>
          </div>
          <div className="work-outline" id="personal">
            <a className="tag-text">personal</a>
            <WorkText link={'random-3d-elements'} title={'random 3d elements'} subtitle={'series of different 3d elements and scenes created with 3ds max'} url1={require('./imgs/work/personal/3dElements/1.jpg')} url2={require('./imgs/work/personal/3dElements/2.jpg')} url3={require('./imgs/work/personal/3dElements/3.png')} url4={require('./imgs/work/personal/3dElements/4.png')} url5={require('./imgs/work/personal/3dElements/5.png')} url6={require('./imgs/work/personal/3dElements/6.png')} url7={require('./imgs/work/personal/3dElements/7.jpg')} url8={require('./imgs/work/personal/3dElements/8.jpg')} url9={require('./imgs/work/personal/3dElements/9.jpg')} url10={require('./imgs/work/personal/3dElements/10.png')} date={'2019 to 2022'} firstText={'random 3d elements consists of a series of elements and scenes I created from 2019 to 2022 using 3ds max. The main goal was to obtain the maximmum knowledge of modeling, texturing and illuminating. That knowledge was first obtained during univeristy and then expanded via online courses form Domestika and some other free tutorials.'} subtitle2={'realism is a must for me'} secondText={'in all of the pieces, realism is a must. My intention is always to experiment what I can get with softwares, and get the most out of it. So, as you can see, most of the renders are, or at least try to be, realistic.'} subtitle3={'various elements, substance painter was also used.'} subtitle4={'rooms are my favorite'} thirdText={"don't ask me why, but I've always found something interesting on creating rooms of all kind. There are so many things to take into consideration: textures, illumination, detailed elements. I guess being in a bedroom inspired me to create my ideal home. Anyways, since day 1 I've been a fan of 3d rooms, you can see some of the ones I did."} lastText={'that last one is my all time favorite. This series of renders brought me wide experience on modelling, texturing, illuminating and rendering. I consider I have a good level for architectural visualization and realistic interiors using 3d softwares.'} type={'3d'} roles={'modelling, texturing, illumination, rendering'} client={'none'}/>
            <WorkText link={'sports-graphics'} title={'sports graphics'} subtitle={''} url1={require('./imgs/work/personal/sportsGraphics/1.png')} url2={require('./imgs/work/personal/sportsGraphics/2.png')} url3={require('./imgs/work/personal/sportsGraphics/3.png')} url4={require('./imgs/work/personal/sportsGraphics/4.png')} url5={require('./imgs/work/personal/sportsGraphics/5.png')} url6={require('./imgs/work/personal/sportsGraphics/6.png')} url7={require('./imgs/work/personal/sportsGraphics/7.png')} url8={require('./imgs/work/personal/sportsGraphics/8.png')} url9={require('./imgs/work/personal/sportsGraphics/9.gif')} url10={require('./imgs/work/personal/sportsGraphics/10.png')} date={'since 2019'} firstText={'random 3d elements consists of a series of elements and scenes I created from 2019 to 2022 using 3ds max. The main goal was to obtain the maximmum knowledge of modeling, texturing and illuminating. That knowledge was first obtained during univeristy and then expanded via online courses form Domestika and some other free tutorials.'} subtitle2={'realism is a must for me'} secondText={'in all of the pieces, realism is a must. My intention is always to experiment what I can get with softwares, and get the most out of it. So, as you can see, most of the renders are, or at least try to be, realistic.'} subtitle3={'various elements, substance painter was also used.'} subtitle4={'rooms are my favorite'} thirdText={"don't ask me why, but I've always found something interesting on creating rooms of all kind. There are so many things to take into consideration: textures, illumination, detailed elements. I guess being in a bedroom inspired me to create my ideal home. Anyways, since day 1 I've been a fan of 3d rooms, you can see some of the ones I did."} lastText={'that last one is my all time favorite. This series of renders brought me wide experience on modelling, texturing, illuminating and rendering. I consider I have a good level for architectural visualization and realistic interiors using 3d softwares.'} type={'postprocessing'} roles={'modelling, texturing, illumination, rendering'} client={'none'} nextWork={'sports graphics'} nextUrl={'sports-graphics'}/>
            <WorkText link={'frontend-practices'} title={'frontend practices'} subtitle={''} url1={'none'} url2={'none'} url3={'none'} url4={'none'} url5={'none'} url6={'none'} url7={'none'} url8={'none'} url9={'none'} url10={'none'} date={''} firstText={''} subtitle2={''} secondText={''} subtitle3={''} subtitle4={''} thirdText={''} lastText={''} type={'developing'} roles={''} client={'none'}/>
            <WorkText link={'this-website'} title={'this website'} subtitle={''} url1={'none'} url2={'none'} url3={'none'} url4={'none'} url5={'none'} url6={'none'} url7={'none'} url8={'none'} url9={'none'} url10={'none'} date={''} firstText={''} subtitle2={''} secondText={''} subtitle3={''} subtitle4={''} thirdText={''} lastText={''} type={'developing'} roles={''} client={'none'}/>
            <a className="tag-text" id="uni">uni</a>
            <WorkText link={'design-contest-poster'} title={'design contest poster'} subtitle={''} url1={'none'} url2={'none'} url3={'none'} url4={'none'} url5={'none'} url6={'none'} url7={'none'} url8={'none'} url9={'none'} url10={'none'} date={''} firstText={''} subtitle2={''} secondText={''} subtitle3={''} subtitle4={''} thirdText={''} lastText={''} type={'design'} roles={''} client={'none'}/>
            <WorkText link={'brand-guidelines'} title={'brand guidelines'} subtitle={''} url1={'none'} url2={'none'} url3={'none'} url4={'none'} url5={'none'} url6={'none'} url7={'none'} url8={'none'} url9={'none'} url10={'none'} date={''} firstText={''} subtitle2={''} secondText={''} subtitle3={''} subtitle4={''} thirdText={''} lastText={''} type={'design'} roles={''} client={'none'}/>
            <WorkText link={'movies-react-website'} title={'movies react website'} subtitle={''} url1={'none'} url2={'none'} url3={'none'} url4={'none'} url5={'none'} url6={'none'} url7={'none'} url8={'none'} url9={'none'} url10={'none'} date={''} firstText={''} subtitle2={''} secondText={''} subtitle3={''} subtitle4={''} thirdText={''} lastText={''} type={'developing'} roles={''} client={'none'}/>
            <WorkText link={'nike-X-banksy'} title={'nike X banksy'} subtitle={''} url1={require('./imgs/work/uni/nikexbanksy/1.png')} url2={require('./imgs/work/uni/nikexbanksy/2.png')} url3={'none'} url4={'none'} url5={'none'} url6={'none'} url7={'none'} url8={'none'} url9={'none'} url10={'none'} date={''} firstText={''} subtitle2={''} secondText={''} subtitle3={''} subtitle4={''} thirdText={''} lastText={''} type={'design'} roles={''} client={'none'}/>
            <WorkText link={'photo-manipulation'} title={'photo manipulation'} subtitle={''} url1={'none'} url2={'none'} url3={'none'} url4={'none'} url5={'none'} url6={'none'} url7={'none'} url8={'none'} url9={'none'} url10={'none'} date={''} firstText={''} subtitle2={''} secondText={''} subtitle3={''} subtitle4={''} thirdText={''} lastText={''} type={'postprocessing'} roles={''} client={'none'}/>
            <a className="tag-text" id="work">work</a>
            <WorkText link={'àgora-sistemes-brand-guidelines'} title={'àgora sistemes brand guidelines'} subtitle={''} url1={'none'} url2={'none'} url3={'none'} url4={'none'} url5={'none'} url6={'none'} url7={'none'} url8={'none'} url9={'none'} url10={'none'} date={''} firstText={''} subtitle2={''} secondText={''} subtitle3={''} subtitle4={''} thirdText={''} lastText={''} type={'design'} roles={''} client={'àgora sistemes'}/>
            <WorkText link={'the-sideline'} title={'the sideline'} subtitle={''} url1={require('./imgs/work/work/theSideline/1.png')} url2={require('./imgs/work/work/theSideline/2.png')} url3={require('./imgs/work/work/theSideline/3.gif')} url4={require('./imgs/work/work/theSideline/4.png')} url5={require('./imgs/work/work/theSideline/5.png')} url6={require('./imgs/work/work/theSideline/6.gif')} url7={require('./imgs/work/work/theSideline/7.png')} url8={require('./imgs/work/work/theSideline/8.png')} url9={require('./imgs/work/work/theSideline/9.png')} url10={require('./imgs/work/work/theSideline/10.png')} date={'2021'} firstText={''} subtitle2={''} secondText={''} subtitle3={''} subtitle4={''} thirdText={''} lastText={''} type={'design'} roles={''} client={'the sideline'}/>
            <WorkText link={'rugby-torunament-poster'} title={'rugby torunament poster'} subtitle={''} url1={'none'} url2={'none'} url3={'none'} url4={'none'} url5={'none'} url6={'none'} url7={'none'} url8={'none'} url9={'none'} url10={'none'} date={''} firstText={''} subtitle2={''} secondText={''} subtitle3={''} subtitle4={''} thirdText={''} lastText={''} type={'design'} roles={''} client={'none'}/>
            <WorkText link={'flyers-for-parc-valles'} title={'flyers for parc vallès'} subtitle={''} url1={'none'} url2={'none'} url3={'none'} url4={'none'} url5={'none'} url6={'none'} url7={'none'} url8={'none'} url9={'none'} url10={'none'} date={''} firstText={''} subtitle2={''} secondText={''} subtitle3={''} subtitle4={''} thirdText={''} lastText={''} type={'design'} roles={''} client={'parc vallès'}/>
            <WorkText link={'seo-optimization-for-various-websites'} title={'seo optimization for various websites'} subtitle={''} url1={'none'} url2={'none'} url3={'none'} url4={'none'} url5={'none'} url6={'none'} url7={'none'} url8={'none'} url9={'none'} url10={'none'} date={''} firstText={''} subtitle2={''} secondText={''} subtitle3={''} subtitle4={''} thirdText={''} lastText={''} type={'seo'} roles={''} client={'none'}/>
            <WorkText link={'community-manager'} title={'community manager'} subtitle={''} url1={'none'} url2={'none'} url3={'none'} url4={'none'} url5={'none'} url6={'none'} url7={'none'} url8={'none'} url9={'none'} url10={'none'} date={''} firstText={''} subtitle2={''} secondText={''} subtitle3={''} subtitle4={''} thirdText={''} lastText={''} type={'social media'} roles={''} client={'none'}/>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default Work;
