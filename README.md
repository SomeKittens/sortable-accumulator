# sortable-accumulator

## Install

`npm install sortable-accumulator`

## Use

```javascript
import { SortableAccumulator } from 'sortable-accumulator';
import { employeeList } from './employeeList';

let sa = new SortableAccumulator();
employeeList.forEach(employee => sa.add(employee.firstName));

console.log('the most common name is', sa.sort(true)[0].value);
```