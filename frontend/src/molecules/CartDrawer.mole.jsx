import React from 'react'
import { Drawer, ClickAwayListener, Button } from '@material-ui/core'
import CartPreview from './CartPreview.mole'
import CloseIcon from '@material-ui/icons/Close';
import { useRecoilState } from 'recoil';
import { cartDrawerState } from '../recoil/atoms';


export default function CartDrawer() {

    const [cartDrawerOpen,setCartDrawerOpen] = useRecoilState(cartDrawerState);

    return (
        <Drawer open={cartDrawerOpen}>
            <ClickAwayListener onClickAway={()=>setCartDrawerOpen(false)}>
                <div >
                    <Button onClick={() =>setCartDrawerOpen(false)} startIcon={<CloseIcon />} fullWidth  >
                        Close
                    </Button>
                    <CartPreview />
                </div>
            </ClickAwayListener>
        </Drawer>
    )
}
