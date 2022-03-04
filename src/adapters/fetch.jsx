import React, { useEffect, useState } from 'react'
import axios from "axios";


export async function Fetch(bookName) {

    let url = `https://www.dbooks.org/api/search/${bookName}`;
    return await axios.get(url);
}