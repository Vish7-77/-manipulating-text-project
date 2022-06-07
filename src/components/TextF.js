import React, { useState } from 'react'

export default function TextF(props) {
    const [text, settext] = useState('')

    const handleOnchange = (e) => {
        settext(e.target.value)
    }


    const handleClick = () => {
        const NewText = text.toUpperCase();
        settext(NewText)

    }
    const handleLClick = () => {
        const NewText = text.toLowerCase();
        settext(NewText)

    }
    const handleCClick = () => {
        settext('')

    }
    const handleCoClick = () => {


        navigator.clipboard.writeText(text)
    }

    const handleRClick = (e) => {

        let newText = text.split(/[ ]+/);
        settext(newText.join(" "))
    }


    return (
        <>
            <div style={{ display: 'flex' }}>
                <div className="mb-3" style={{
                    width: '700px',
                    margin: '55px 12px 12px'
                }}>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{ textStyle: 'bold', fontSize: '26px', fontFamily: '-moz-initial' }}>ManuP-Text</label>
                    <textarea className="form-control" onChange={handleOnchange} value={text} id="exampleFormControlTextarea1" style={{ borderSize: '2px', borderColor: 'black', borderStyle: 'solid', backgroundColor: `${props.mode === "dark" ? 'rgb(86, 90, 77)' : 'white'}` ,color:`${props.mode==='dark'?'white':'black'}`}} rows="7"></textarea>
                </div>
                <div style={{ display: 'grid', marginLeft: '45px', marginTop: '86px', maxWidth: '276px' }}>
                    <span style={{ display: 'grid' }}>
                        <button type="button" className="btn btn-dark my-3  mx-4" onClick={handleClick}>UpperCase</button>
                        <button type="button" className="btn btn-dark my-3 mx-4" onClick={handleLClick}>LowerCase</button>
                        <button type="button" className="btn btn-dark my-3 mx-4" onClick={handleCClick}>Clear text</button>
                    </span>
                </div>
                <div style={{ display: 'grid', marginLeft: '45px', marginTop: '86px', maxWidth: '276px' }}>
                    <button type="button" className="btn btn-dark my-3 mx-4" onClick={handleCoClick}>Copy Text</button>
                    <button type="button" className="btn btn-dark my-3 mx-4" onClick={handleRClick}>Remove Spacing</button>
                </div>
            </div>
            <div className="container" style={{ marginLeft: '8px' }}>
                <h2>Preview here</h2>
                <p>{text.split(" ").length - 1} word And {text.length} Charachters</p>
                <p>{text}</p>
            </div>
        </>

    )
}
