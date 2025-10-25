import React, { useEffect, useState } from 'react'

const API_BASE_URL = 'https://vedicscriptures.github.io';
const API_OPTION = {
    method : 'GET',
    headers : {
        accept : 'application/json'
    }
};

    let endpoint = `${API_BASE_URL}/chapters` ;



export const fetchdata = async(chapter)  =>{

        try {
            // console.log(chapter);
            if(chapter > 0)
            {
              endpoint = `${API_BASE_URL}/chapter/${chapter}` ;
            }
            const response = await fetch(endpoint, API_OPTION);
            if(!response.ok)
            {
                alert('error');
            }
           const data = await response.json()
         console.log(data);
            return data;


            
        } catch (error) {

          console.log(error);
            
        }


    }



