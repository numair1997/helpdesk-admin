import { useModal } from '@store/apps/modal';
import dynamic from 'next/dynamic';

const CreateRoleModalView = dynamic(() => import('@components/roles/create-role-modal-view'))
const EditRoleView = dynamic(() => import('@components/roles/edit-role-modal-view'))
const GeneralDeleteView = dynamic(() => import('./general-delete-view'))
const UserStatusModal = dynamic(() => import('@components/users/user-status-modal'));
const HelperStatusModal = dynamic(() => import('@components/helpers/helper-status-modal'));
const SubscriptionsEditModal = dynamic(() => import('@components/subscriptions/subscriptionEditModal'));
const SubscriptionsDeleteModal = dynamic(() => import('@components/subscriptions/subscriptionDeleteModal'));
const CreatePermissionView = dynamic(() => import('@components/permissions/create-permission-modal-view'));
const EditPermissionView = dynamic(() => import('@components/permissions/edit-permission-modal-view'));
const HelpersUsersFeedbackReviewsModal = dynamic(() => import('@components/helpers/helpers-users-feedback-reviews-modal'));
const UserBanUnBanModal = dynamic(() => import('@components/helpers/user-ban-unban-modal'));
const HelperBanUnBanModal = dynamic(() => import('@components/helpers/helper-ban-unban-modal'));

const ManagedModal = () => {
    const { modalState: { view } } = useModal();

    return (
        <>
            {view === "GENERAL_DELETE_VIEW" && < GeneralDeleteView />}
            {view === "CREATE_ROLE_VIEW" && < CreateRoleModalView />}
            {view === "CREATE_PERMISSION_VIEW" && < CreatePermissionView />}
            {view === "EDIT_ROLE_VIEW" && < EditRoleView />}
            {view === "EDIT_PERMISSION_VIEW" && <EditPermissionView />}
            {view === "USER_STATUS_MODAL" && <UserStatusModal />}
            {view === "HELPER_STATUS_MODAL" && <HelperStatusModal />}
            {view === "HELPERS_USERS_FEEDBACK_REVIEWS_MODAL" && <HelpersUsersFeedbackReviewsModal />}
            {view === "SUBSCRIPTIONS_STATUS_MODAL" && <SubscriptionsEditModal />}
            {view === "SUBSCRIPTIONS_DELETE_MODAL" && <SubscriptionsDeleteModal />}
            {view === "BAN_UNBAN_USER_MODAL" && <UserBanUnBanModal />}
            {view === "BAN_UNBAN_HELPER_MODAL" && <HelperBanUnBanModal />}


        </>
    );
};

export default ManagedModal;
