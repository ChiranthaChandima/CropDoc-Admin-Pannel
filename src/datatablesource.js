export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const diseaseColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "dnumber",
    headerName: "Disease Number",
    width: 230,
  },
  {
    field: "dname",
    headerName: "Disease Name",
    width: 230,
  },
  {
    field: "dcase",
    headerName: "Disease Cause",
    width: 230,
  },
];

export const treatmentColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "tname",
    headerName: "Treatment Number",
    width: 230,
  },
  {
    field: "dname",
    headerName: "Disease Name",
    width: 230,
  },
  {
    field: "cause",
    headerName: "Cause",
    width: 230,
  },
];
