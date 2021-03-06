import Code from './code'
import GenericLink from './link'
import H1 from './h1'
import H2 from './h2'
import H3 from './h3'
import H4 from './h4'
import H5 from './h5'
import H6 from './h6'
import HR from './hr'
import InlineCode from './inline-code'
import LI from './li'
import P from './p'
import Quote from './quote'
import Strong from './strong'
import UL from './ul'
import Wrapper from './wrapper'
import { Table, TableHead, TableBody, TableRow, TableRowCell, TableHeadCell } from './table'

const components = {
  a: GenericLink,
  blockquote: Quote,
  code: Code,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: HR,
  inlineCode: InlineCode,
  li: LI,
  p: P,
  strong: Strong,
  ul: UL,
  tr: TableRow,
  th: TableHeadCell,
  td: TableRowCell,
  thead: TableHead,
  tbody: TableBody,
  table: Table,
  wrapper: Wrapper
}

export default components
