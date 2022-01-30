import axios from "axios";
import { useState } from "react";

export const getDataImage = async () => {
    const response = await axios
        .get('https://api.chucknorris.io/jokes/random');
        return response;
}