import { Fragment, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useModal } from '@store/apps/modal';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Icon from 'src/@core/components/icon'
import { User } from '@ts-types/generated';
import DialogActions from '@mui/material/DialogActions';
import CustomButton from '@components/common/Button/custom-button';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { useUpdateUserMutation } from '@data/users/user-update-mutation';

const UserStatusModal = () => {
    const { t } = useTranslation(['form']);
    const [open, setOpen] = useState<boolean>(true);
    const { closeModal, modalState } = useModal();

    const userData: User = modalState?.data

    const { mutate: toggleUserStatus, isLoading } = useUpdateUserMutation();

    const handleBan = () => {
        toggleUserStatus(
            {
                ...(userData?.email ? { email: userData?.email } : { phone: userData?.contact }),
                isActive: !userData?.isActive,
            },
            {
                onSuccess: () => {
                    handleClose()
                }
            }
        )
    }

    const handleClose = () => {
        setOpen(false);
        closeModal();
    };


    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={"sm"}
                fullWidth={true}
                aria-labelledby='scroll-dialog-title'
                aria-describedby='scroll-dialog-description'
            >
                <DialogContent>
                    <Box
                        sx={{
                            display: 'flex',
                            textAlign: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            '& svg': { mb: 6, color: 'warning.main' }
                        }}
                    >
                        <Icon icon='tabler:alert-circle' fontSize='5.5rem' />
                        <Typography>{`Are you sure you would like to ${userData?.isActive ? 'Ban' : 'Un-Ban'} this user ?`}</Typography>
                    </Box>
                </DialogContent>
                <DialogActions
                    sx={{
                        justifyContent: 'center',
                        px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                        pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
                    }}
                >
                    <CustomButton loading={isLoading} fullWidth={false} variant='contained' sx={{ mr: 2 }} onClick={handleBan} type={'button'}>
                        {t('Yes')}
                    </CustomButton>
                    <Button variant='tonal' color='secondary' onClick={handleClose}>
                        {t('Cancel')}
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment >
    );
};

export default UserStatusModal;
