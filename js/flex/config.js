const Default = Object.freeze({
	countRange: 2
})

const System = {
	classPrefix: 'fh__'
}

const Colors = [
'coral', 'teal', 'pink', 
'orange', 'limegreen', 
'skyblue', 'brown'
];

const FlexProps = [
{
	name: 'flex-direction',
	value: ['row', 'row-reverse', 'column', 'column-reverse']
},
{
	name: 'flex-wrap',
	value: ['nowrap', 'wrap', 'wrap-reverse']
},
{
	name: 'justify-content',
	value: ['flex-start', 'flex-end', 'center', 'space-around', 'space-between']
},
{
	name: 'align-items',
	value: ['stretch', 'baseline', 'center', 'flex-start', 'flex-end']
},
{
	name: 'align-content',
	value: ['stretch', 'center', 'flex-start', 'flex-end', 'space-around', 'space-between']
},
]


export {Default, System, Colors, FlexProps}