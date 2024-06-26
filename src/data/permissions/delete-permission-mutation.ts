import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import permissions from "@repositories/permissions";

export const useDeletePermissionMutation = () => {
    const { t } = useTranslation();
    const queryClient = useQueryClient();

    return useMutation(
        ({ permissionId }: { permissionId: string }) =>
            permissions.deletePermission(`${API_ENDPOINTS.DELETE_PERMISSION}/${permissionId}`,),
        {
            onSuccess: () => {
                toast.success(t("Permission deleted successfully"), { duration: 4000 });
            },
            onSettled: () => {
                queryClient.invalidateQueries({
                    queryKey: [API_ENDPOINTS.PERMISSIONS]
                });
            },
            onError: (error: any) => {
                toast.error(
                    error?.response?.data?.message
                        ? Array.isArray(error?.response?.data?.message)
                            ? error?.response?.data?.message[0]
                            : error?.response?.data?.message
                        : t('errors.something-went-wrong')
                )
            }
        }
    );
};
