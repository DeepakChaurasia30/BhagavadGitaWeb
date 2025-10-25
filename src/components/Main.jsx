import React, { useEffect, useState } from 'react';
import { fetchdata } from "../services/api";

const Main = () => {
    const [sdata, setdata] = useState([]);

    const [chapter, setchapter] = useState("");

    function handlechap(chapter_number) {
        console.log(chapter_number);
        setchapter(chapter_number);
    }

    useEffect(() => { }, [])

    useEffect(() => {
        async function loadData() {
            try {
                const data = await fetchdata(chapter);
                console.log(data);
                setdata(data);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        }
        loadData();
    }, [chapter]);

    return (
        <main>
            {/* <section id='sbar'>
                <h2>Search Bar</h2>
                <input type="text" placeholder='Search...' />
            </section> */}

            {/* Conditonal Rendering to show chapter or chapter desc */}
            { chapter > 0 ? (
                <section id ='chapter'>
                    {console.log(sdata)}
                    <h2>Chapter {chapter}</h2>
                    <h4>{sdata.meaning?.en || "Meaning not available"}</h4>
                    <h4>{sdata.meaning?.hi || "Meaning not available"}</h4>
                    <p>{sdata.summary?.en || "Summary not available"}</p>
                    <p>{sdata.summary?.hi || "Summary not available"}</p>
                    <h4>Verses(श्लोक) Count : {sdata.verses_count}</h4>
                </section>
            ):
            <section id='dlist'>
                <h2>Chapters</h2>
                {sdata.length === 0 ? (
                    <p>Loading chapters...</p>
                ) : (
                    <div>
                        {sdata.map((chapter) => (
                            <div
                                key={chapter.chapter_number}
                            >
                                <a href="#" onClick={() => handlechap(chapter.chapter_number)}><h3>{chapter.chapter_number}. {chapter.name}</h3> </a>
                                <p><strong>Translation:</strong> {chapter.translation}</p>
                                <a href={`https://vedicscriptures.github.io/slok/${chapter.chapter_number}/1`} target="_blank"><p><strong>Verses(श्लोक):</strong> {chapter.verses_count}</p></a>
                            </div>
                        ))}
                    </div>
                )}
          </section> }
        </main >
    )}

    export default Main;
