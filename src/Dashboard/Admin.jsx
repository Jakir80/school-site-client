import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from '../AuthProvider/UseAxiosSecure';

const UseAdmin = () => { 
        const {user, loading} =useContext(AuthContext);
        const [axiosSecure] = useAxiosSecure();    
        const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
            queryKey: ['isAdmin', user?.email],
            enabled: !loading,
            queryFn: async () => {
                const res = await axiosSecure.get(`/users/admin/${user?.email}`);
                return res.data.admin;
            }
        })
        return [isAdmin, isAdminLoading]
    
};

export default UseAdmin;