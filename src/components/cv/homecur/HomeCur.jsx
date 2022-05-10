import React, { useRef, useState, useEffect } from 'react'
import PERFIL from "../../../assets/perfil.jpg";
import CV from "../../../assets/pdf/ResumeCv.pdf";
import 'boxicons'

const HomeCur = ({translateVal}) => {
    const [headerVal, setHeaderVal] = useState({value: 'curheader.1', isInEditMode:false});
    const [editValInput, setEditValInput] = useState('');
    const [width, setWidth] = useState(0);
    const editInputRef = useRef(null);
    const span = useRef();
    /* EDIT MODE */
    const changeEditMode = () => {
        setHeaderVal({
            ...headerVal,
            isInEditMode: !headerVal.isInEditMode
        })
    }
    
    useEffect(() =>{
        if (headerVal.isInEditMode){
            editInputRef.current.focus()
        }
    },[headerVal.isInEditMode])

    useEffect(() => {
        setWidth(span.current?.offsetWidth)
    },[editValInput])

    const updateComponentValue = () => {
        setHeaderVal({
            ...headerVal,
            isInEditMode: false,
            value: editValInput
        })
    }
    const editVal = (desc) => {
        return (
            <div className='editValInputBox'>
            <div className='editActions'>
            <button type='button' onClick={changeEditMode}>X</button>
            <button type='button' onClick={updateComponentValue}>Ok</button>
            </div>
                <div>
                <span id="hide" ref={span}>{editValInput}</span>
                <input type="text" style={{width}} placeholder={desc} 
                maxLength={12} ref={editInputRef} 
                onChange={(e) => setEditValInput(e.target.value)} 
                defaultValue={translateVal(headerVal.value)} />
                </div>
            </div>
        )
    }
  return (
    <>
        <div className="home__container section bd_grid">
            <div className="home__data bd_grid">
                <img src={PERFIL} alt="" className='home__img' />
                <h1 className='home__title'>
                {
                    headerVal.isInEditMode ? (
                        editVal('First Name')
                    )
                    : 
                    (
                        <span onDoubleClick={changeEditMode}>
                            {translateVal(headerVal.value)}
                        </span>
                    )
                }
                    <b>{translateVal('curheader.2')}</b>
                </h1>
                <h3 className="home__profession">{translateVal('curheader.3')}</h3>
        {/*  Button to generate and download the pdf. Available for desktop */}
            <div>
                <a href={CV} download className="home__button-movil">
                {translateVal('curheader.7')}
                </a>
            </div>
            </div>
            <div className="home__address bd_grid">
                <span className="home__information">
                <i class='bx bx-map home__icon'></i>{translateVal('curheader.4')}
                </span>
                <span className="home__information">
                <i class='bx bx-envelope home__icon' ></i>{translateVal('curheader.5')}
                </span>
                <span className="home__information">
                <i class='bx bx-phone home__icon'></i>{translateVal('curheader.6')}
                </span>
            </div>
        </div>
        {/* Theme change button */}

    </> 
  )
}

export default HomeCur