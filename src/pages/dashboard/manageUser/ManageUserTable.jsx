import ManageUserTableRow from "./ManageUserTableRow";

const ManageUserTable = ({ users, handleDeleteUser,refetch }) => {
  return (
    <div className="px-3 py-4 flex justify-center rounded-t-xl">
      <table className="w-full bg-white shadow-md rounded-xl mb-4">
        <tbody>
          <tr className="border-b bg-[#D1A054] text-xl font-semibold text-white">
            <th className="text-left p-3 px-5">Name</th>
            <th className="text-left p-3 px-5">Email</th>
            <th className="text-left p-3 px-5">Status</th>
            <th className="text-left p-3 px-5">Role</th>
            <th className="text-left p-3 px-5">Update Role</th>
            <th></th>
          </tr>
          {users.map((user) => (
            <ManageUserTableRow key={user._id} user={user} handleDeleteUser={handleDeleteUser} refetch={refetch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUserTable;
