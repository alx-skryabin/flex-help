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
]

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

const URL = {
	github: 'https://github.com/alx-skryabin/flex-help',
	insta: 'http://instagram.com/alx.skryabin',
	vk: 'https://vk.com/alx.skryabin'
}


export {Default, System, Colors, FlexProps, URL}