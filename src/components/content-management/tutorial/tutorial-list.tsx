import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FaqEntries, IPaginatorInfo, Tutorial } from '@ts-types/generated';
import { IconButton } from '@mui/material';
import Icon from '@components/common/icon/icon';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import { useModal } from '@store/apps/modal';

type PropTypes = {
    data?: Tutorial[];
    onPaginationChange: any;
    paginatorInfo?: IPaginatorInfo;  // Make paginatorInfo optional
};

const defaultPaginatorInfo: IPaginatorInfo = {
    lastPage: 1,
    page: 1,
    totalDocs: 0,
    limit: 10,
    totalPages: 1,
    pagingCounter: 1,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null
};

const TutorialList = ({ data = [], onPaginationChange, paginatorInfo = defaultPaginatorInfo }: PropTypes) => {
    const router = useRouter();
    const { openModal } = useModal();

    // Ensure data is always an array
    const tutorialData = Array.isArray(data) ? data : [];

    const TutorialColumn: GridColDef[] = [
        {
            flex: 0.25,
            minWidth: 200,
            field: 'title',
            headerName: 'Title',
            sortable: false,
            renderCell: ({ row }: { row: Tutorial }) => <Typography sx={{ color: 'text.secondary' }}>{row?.title ?? "-"}</Typography>
        },
        {
            flex: 0.25,
            minWidth: 200,
            field: 'description',
            headerName: 'Description',
            sortable: false,
            renderCell: ({ row }: { row: Tutorial }) => <Typography sx={{ color: 'text.secondary' }}>{row?.description ?? "-"}</Typography>
        },
        {
            width: 250,
            field: 'action',
            headerName: 'Action',
            sortable: false,
            headerAlign: "right",
            align: "right",
            renderCell: ({ row }: { row: FaqEntries }) => (
                <Box>
                    <IconButton
                        title='Delete'
                        color='inherit'
                        aria-haspopup='true'
                        onClick={() => openModal({ view: "DELETE_TUTORIAL", data: row })}
                    >
                        <Icon color='red' fontSize='1.225rem' icon={'octicon:trash-24'} />
                    </IconButton>
                    <IconButton
                        color='inherit'
                        title='Edit'
                        aria-haspopup='true'
                        onClick={() => openModal({ view: "UPDATE_TUTORIAL", data: row })}
                    >
                        <Icon color='green' fontSize='1.225rem' icon={'nimbus:edit'} />
                    </IconButton>
                    <IconButton
                        title='View'
                        color='inherit'
                        aria-haspopup='true'
                        onClick={() => router.push(`${router.asPath}/details/${row?.id}`)}
                    >
                        <Icon fontSize='1.625rem' icon={'ph:eye'} />
                    </IconButton>
                </Box>
            )
        },
    ];

    return (
        <>
            <DataGrid
                autoHeight
                disableColumnMenu
                rows={data?.data?.map((value) => ({ ...value }))}
                columns={TutorialColumn}
                hideFooterPagination={true}
                hideFooter={true}
            />
            <Stack
                mt={5}
                spacing={2}
                sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}
            >
                <Pagination
                    color="primary"
                    count={paginatorInfo?.lastPage || 1}
                    page={paginatorInfo?.page || 1}
                    onChange={onPaginationChange}
                />
            </Stack>
        </>
    );
}

export default TutorialList;