import _ from 'lodash';

//Request
import { getClass } from "./../requests/ClassesRequest";
export let filterFromCode = (code) => {

    getClass(code,(res) => {

        console.log(res);
        if (!res.status) {
            return undefined;
        }

        return res.data;
    });
};