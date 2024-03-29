import { AppContext } from "@/context/app.context";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUsers, updateUserPermission } from "./services";

type SelectedCollaboratorType = {
  id: number;
  name: string;
  email: string;
  role: string;
  permissions?: string[];
};

export default function useManageAccessHook() {
  const { state, dispatch } = useContext(AppContext);
  const router = useRouter();
  const [users, setUsers] = useState<SelectedCollaboratorType[]>([]);
  const [selectedCollaborator, setSelectedCollaborator] =
    useState<SelectedCollaboratorType | null>(null);
  const [permissions, setPermissions] = useState<string[]>([]);
  const [permissionUpdated, setPermissionUpdated] = useState<boolean>(false);

  const fetchUsers = async () => {
    const response = await getUsers();
    const collaboratorUsers = response.filter(
      (e: SelectedCollaboratorType) => e.role !== "author"
    );
    setUsers(collaboratorUsers);
  };

  useEffect(() => {
    if (!state?.token) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  const onChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setPermissionUpdated(false);
    const collaborator: SelectedCollaboratorType[] = users.filter(
      (user: SelectedCollaboratorType) => user?.id === +e.currentTarget?.value
    );
    setSelectedCollaborator(collaborator[0]);
    const { permissions } = collaborator[0] || {};
    setPermissions(permissions || []);
  };

  const updatePermissions = async () => {
    if (selectedCollaborator?.id) {
      const response = await updateUserPermission({
        id: selectedCollaborator?.id,
        permissions,
      });
      if (response?.id === selectedCollaborator?.id) {
        setPermissionUpdated(true);
        fetchUsers();
        setSelectedCollaborator(response);
        setTimeout(() => {
          setPermissionUpdated(false);
        }, 2000);
      }
    }
  };

  const permissionCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target || {};
    if (permissions.includes(name)) {
      const checkedPermissions = permissions.filter((p) => p !== name);
      setPermissions(checkedPermissions);
    } else {
      setPermissions([...permissions, name]);
    }
  };

  const checkPermissionsChanged = () => {
    if (!selectedCollaborator) return false;
    if (selectedCollaborator?.permissions?.length !== permissions?.length) {
      return true;
    } else {
      const isPermissionsChanged = permissions.some(
        (e) => !selectedCollaborator?.permissions?.includes(e)
      );
      return isPermissionsChanged;
    }
  };

  return {
    state,
    users,
    selectedCollaborator,
    permissions,
    permissionUpdated,
    enableSave: checkPermissionsChanged(),
    updatePermissions,
    permissionCheckHandler,
    onChangeHandler,
  };
}
