import {useQuery} from "react-query";

export const useGetEmployees = (page: number) => {
    const queryKey = ['employees', page];
    const url_page_filter = JSON.stringify(page)
    const url_nationality_filter = encodeURI("fr,gb")
    return useQuery(queryKey, () => {
        return fetch(`https://randomuser.me/api/?page=${url_page_filter}&results=12&nat=${url_nationality_filter}&seed=foobar`).then(res => {
                return res.json()
            }
        )
    })
}