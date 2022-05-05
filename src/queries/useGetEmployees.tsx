import {useQuery} from "react-query";

export const useGetEmployees = (page: number, checked: boolean) => {
    const queryKey = ['employees', page, checked];
    const url_page_filter = JSON.stringify(page);
    const allNationalities = "au, br, ca, ch, de, dk, es, fi, fr, gb, ie, ir, no, nl, nz, tr, us";
    const url_nationality_filter = encodeURI(checked ? "fr" : allNationalities)
    return useQuery(queryKey, () => {
        return fetch(`https://randomuser.me/api/?page=${url_page_filter}&results=12&nat=${url_nationality_filter}&seed=foobar`).then(res => {
                return res.json();
            }
        );
    });
};