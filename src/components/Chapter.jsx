import React from 'react'

const Chapter = ({ch:sdata}) => {
    console.log(sdata)
    return (
        <>

            <section id='chapter'>
                {console.log(sdata)}
                <h2>Chapter {sdata.chapter_number}</h2>
                <h4>{sdata.meaning?.en || "Meaning not available"}</h4>
                <h4>{sdata.meaning?.hi || "Meaning not available"}</h4>
                <p>{sdata.summary?.en || "Summary not available"}</p>
                <p>{sdata.summary?.hi || "Summary not available"}</p>
                <h4>Verses(श्लोक) Count : {sdata.verses_count}</h4>
            </section>
        </>
    )
}

export default Chapter