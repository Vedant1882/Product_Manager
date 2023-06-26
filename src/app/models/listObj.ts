import { ListDataObj } from "./ListDataObj"
import { button } from "./buttons"
import { DisplayedHeaders } from "./displayedHeader"
import { ToolBar } from "./toolbar"

export interface listObj{
   listHeader:ListDataObj,
   toolBar:ToolBar,
   buttons:button,
   dataCallBack:string
  }