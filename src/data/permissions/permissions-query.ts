import permissions from "@repositories/permissions"
import { useQuery } from "@tanstack/react-query"
import { GeneralQueryParam, QueryParamsType } from "@ts-types/custom.types"
import { IPaginator, Permission } from "@ts-types/generated"
import { API_ENDPOINTS } from "@utils/api/endpoints"

type QueryParamType = GeneralQueryParam;

const fetchPermissions = async ({ queryKey }: QueryParamsType) => {
    const {
        limit,
        page,
        text,
    } = queryKey[1] as QueryParamType;
    const url = `${API_ENDPOINTS.PERMISSIONS}?limit=${limit}&page=${page}${text ? `&search=${text}` : ""}`
    const { data } = await permissions.getAllPermissions(url)
    return { permissions: { data: data?.data, paginatorInfo: data?.meta } }
}

const usePermissionsQuery = (options: QueryParamType) => {
    return useQuery<{ permissions: IPaginator<Permission> }, Error>(
        [API_ENDPOINTS.PERMISSIONS, options],
        fetchPermissions,
        {
            keepPreviousData: true,
            staleTime: 270000 // 270000ms is 4.5 minutes while cache time is 5 minutes by default
        }
    )
}

export { fetchPermissions, usePermissionsQuery }