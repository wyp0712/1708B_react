const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];

const season = [
  {
    label: '春',
    value: '春',
  },
  {
    label: '夏',
    value: '夏',
  },
];

const res = ["02", "02-2", "02-2-2"]
const province = [
  {
    label: '北京',
    value: '01',
    children: [
      {
        label: '东城区',
        value: '01-1',
      },
      {
        label: '西城区',
        value: '01-2',
      },
      {
        label: '崇文区',
        value: '01-3',
      },
      {
        label: '宣武区',
        value: '01-4',
      },
    ],
  },
  {
    label: '浙江',
    value: '02',
    children: [
      {
        label: '杭州',
        value: '02-1',
        children: [
          {
            label: '西湖区',
            value: '02-1-1',
          },
          {
            label: '上城区',
            value: '02-1-2',
          },
          {
            label: '江干区',
            value: '02-1-3',
          },
          {
            label: '下城区',
            value: '02-1-4',
          },
        ],
      },
      {
        label: '宁波',
        value: '02-2',
        children: [
          {
            label: 'xx区',
            value: '02-2-1',
          },
          {
            label: 'yy区',
            value: '02-2-2',
          },
        ],
      },
      {
        label: '温州',
        value: '02-3',
      },
      {
        label: '嘉兴',
        value: '02-4',
      },
      {
        label: '湖州',
        value: '02-5',
      },
      {
        label: '绍兴',
        value: '02-6',
      },
    ],
  },
];

// console.log(
//   province[1].label , 
//   province[1].children[0].label, 
//   province[1].children[0].children[0].label, '---')


//   console.log(
//     Number('01') - 1, 
//   )

// function handleCityFn(resArr, provinceArr) {
//   province.forEach((item, index) => {
//     if (item.value === res[0]) {
//       if (item.children) {
//         for(let v of item.children) {
//           if (v.value === res[1]) {
//             for(let a of v.children) {
//               if (a.value === res[2]) {
//                 console.log(item.label, '====',v.label,'===', a.label)
//                 return item.label + '省' + v.label + '市' + a.label + '县'
//               }
//             } 
//           }
//         }
//       }
//     }
//   })
// }

// handleCityFn(res, province)


export {province};


// function handleCityData(resArr, )



// values.forEach((item, index) => {
//   province.forEach((val, ind) => {
//     if (item === val.value) {
//       // console.log(val, 'val')
//       a = val.children;
//     }
//   })
// })

// const arr = province.filter(item => item.value);
// console.log(arr, 'arr')



// export 