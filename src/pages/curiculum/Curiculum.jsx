import Header from "../../components/cv/header/Header";
import HomeCur from "../../components/cv/homecur/HomeCur";
import Social from "../../components/cv/social/Social";
import i18n from '../../i18n';
import Profile from "../../components/cv/profile/Profile";
import Edu from "../../components/cv/edu/Edu";
import Skills from "../../components/cv/skills/Skills";
import "./sass/styles.scss";
import Experience from "../../components/cv/experience/Experience";
import Certificate from "../../components/cv/certificate/Certificate";
import References from "../../components/references/References";
import Languages from "../../components/cv/languages/Languages";
import Interests from "../../components/interests/Interests";
import { useTranslation } from 'react-i18next';
import { useRef, useState, useEffect } from "react"
import html2pdf from "html2pdf.js";

const Curiculum = () => {
  const {t, il8n} = useTranslation();
  const scrollTopRef = useRef(null);
  // const curRef = useRef(null);
  const downloadRef = useRef(null);
  const pdfRef = useRef(null);
  const [iconTag, setIconTag] = useState(true);
  const themeButtonRef = useRef(null);
  const translateVal = (inputVal) => {
    return t(`${inputVal}`)
}
function scrollTop(){
   if (this.scrollY >= 200) scrollTopRef.current?.classList.add('show-scroll'); else scrollTopRef.current?.classList.remove('show-scroll')
} 
window.addEventListener('scroll', scrollTop);
const darkTheme = 'dark-theme';

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//we obtain the current theme that he interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
//We validate if the user previously choose a topic
let notRun = false;
useEffect(() => {
  const target = document.body.classList;
  // if (!target.contains('secondpage')){
  //   target.add('secondpage')
  // }
  if (selectedTheme){
    //if the validation was fulfilled, we asked what the problem was to know if we activated or deativated the dark theme
    // curRef.current.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    // themeButtonRef.current.classList[selectedIcon === 'moon' ? 'add' : 'remove'](iconTheme);
    const newIconVal = selectedIcon === 'true' ? true : false;
    // console.log("checkmate", newIconVal, selectedIcon, typeof selectedIcon, Boolean(selectedIcon));
    setIconTag(newIconVal)
  }
}, [])

const handleChangeTheme = () => {
  // curRef.current.classList.toggle(darkTheme);
  document.body.classList[selectedTheme === 'dark' ? 'remove' : 'add'](darkTheme); 
  setIconTag(!Boolean(iconTag));
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', !Boolean(iconTag));
}

function scaleCv() {
  document.body.classList.add('scale-cv');
} 

function removeScale(){
  document.body.classList.remove('scale-cv');
}

function generateResume(){
  let options = {
    margin:0,
    filename: "myResume.pdf",
    image: {type: 'jpeg', quality: 0.98},
    html2Canvas: {scale: 4},
    jsPDF: { format: 'a4', orientation: 'portrait' }
  }
  html2pdf(pdfRef.current, options);
}

const handleDownload = () => {
  scaleCv();
  generateResume();
}

  return (
    <>
        <Header translateVal={translateVal}/>
        <main className="l-main bd-container">
            {/* All elements within this div, is generated in PDF */}
            <div ref={pdfRef} className="resume" id="area-cv">
                <div className="resume__left">
                  <section className="home" id="home">
                  <HomeCur translateVal={translateVal} />
                  <i className={`${iconTag ? 'bx bx-moon' : 'bx bx-sun'} change-theme`} onClick={handleChangeTheme} ref={themeButtonRef} title="Theme" id="theme-button"></i>
                  <i onClick={handleDownload} ref={downloadRef} class="bx bx-download generate-pdf" title="Generate PDF" id="resume-button"></i>
                  </section>
                  <Social translateVal={translateVal} />
                  <Profile translateVal={translateVal} />
                  <Edu translateVal={translateVal} />
                  <Skills translateVal={translateVal} />
                </div>
                <div className="resume__right">
                  <Experience translateVal={translateVal} />
                  <Certificate translateVal={translateVal} />
                  <References translateVal={translateVal} />
                  <Languages translateVal={translateVal} />
                  <Interests translateVal={translateVal} />
                </div>
            </div>
        </main>
        <a href="#" ref={scrollTopRef} className="scrolltop" id="scroll-top">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
    </>
  )
}

export default Curiculum