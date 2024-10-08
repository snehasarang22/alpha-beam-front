import { productsList } from '@/data/products';
import { columns } from './columns';
import { DataTable } from './data-table';
import CreateUpdateProductDialog from './create-update-product';
import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';
import { useState } from 'react';

const AdminProducts = () => {
  const [openCreateProduct, setOpenCreateProduct] = useState(false);
  return (
    <div className="container mx-auto py-10">
      <Dialog>
        <CreateUpdateProductDialog
          action="Create"
          triggerNode={
            <Button variant={'outline'} className="mb-4">
              Create Product
            </Button>
          }
          open={openCreateProduct}
          setOpen={setOpenCreateProduct}
        />
      </Dialog>
      <DataTable columns={columns} data={productsList} />
    </div>
  );
};

export default AdminProducts;
