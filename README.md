

# Convert Zeplin Designs to React Native snippets/components

* Zeplin : https://zeplin.io
* React Native: https://facebook.github.io/react-native/

Do you have designs in Zeplin, and need to turn those into React Native UI (or even html) codes?  This will take those design's json schema, and automatically create React Native snippets/components or even html tags through template.

> ##  🖐️ **Contributors** and **PR** are welcomed !!! 🖐️


![Zeplin to React Native](assets/zeplin_to_react_native.png?raw=true)
*****

# Getting started

### Prerequisites:
* Node 8.5.0+ https://nodejs.org/en/
* Your Zeplin designs links

### Steps to install:

```bash
npm i zeplin-to-react-native
```
or if you use 'yarn' then
```bash
yarn add zeplin-to-react-native
```

## Example
#### index.js
```js
const zep2RN = require('zeplin-to-react-native')

zep2RN.config({ dir:'shop', url: 'https://cdn.zeplin.io/5d08b55ad0a4d25d8cb653cc/screens/5d08b60ef033df15f0082080/versions/5d08b7b8d6587e15d8cd70de/snapshot/5d08b7b8d6587e15d8cd70df?Expires=1563445967&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uemVwbGluLmlvLzVkMDhiNTVhZDBhNGQyNWQ4Y2I2NTNjYy9zY3JlZW5zLzVkMDhiNjBlZjAzM2RmMTVmMDA4MjA4MC92ZXJzaW9ucy81ZDA4YjdiOGQ2NTg3ZTE1ZDhjZDcwZGUvc25hcHNob3QvNWQwOGI3YjhkNjU4N2UxNWQ4Y2Q3MGRmIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTYzNDQ1OTY3fX19XX0_&Signature=ftLRI4xMM33kGRTwxUktt4Avvuq7w-SzqhJB8CNUjq3Q2O9WXNOsg40Ek8iE35r8PG4JZNtcVgyCj2WTJf4FcrdnZbaD9oaJSy19nHUX4v5uEjMzompe6mHbKdozvt6bFhnpxvlye0NRfnrOsckM8ScBooXDlvZHrayHrDdGeV8MWJYQ8YVruUYGr3Y~JGPpiQUUif~YF64u3-y2WHGg9xkrsRXpDQa-gqTqV8j4TOPcbV9A2ob-QytukXGbf5UKau2-zsWQcD8SwW4RQBoBQia66eRecK2AWr~6X37dYzCBVdPW4Qk7-n-UYa2ihDMC0j6dF11ncD7ZmzVyzK38Kw__&Key-Pair-Id=APKAJKD6BRIMESUCGIPA' })
zep2RN.convert().then(res=>console.log(res))
                .catch(err=>console.log(err))

```

Accepted Config params

| Param| Default|Required|Value |
| :------ | :-------|:-------|:------- |
| **url** | ` `|Yes|`url of the zeplin design json link` |
| **dir** | `default`||`dir/folder path to save the output file` ... |
| **template** |`react-native`|| `react-native` or `html` |
| **generateText** |`true`|| `true` or `false` |
| **generateView** |`true`|| `true` or `false` |
| **generateImage** |`true`|| `true` or `false` |
| **traceTextTag** |`true`|| `true` or `false` |
| **traceViewTag** |`false`|| `true` or `false` |
| **traceImageTag** |`false`|| `true` or `false` |


## Here's the generated code:
#### output file './zep2RN/shop/Text.jsx
```jsx
<Text  style={{ fontSize :  12 , lineHeight :  0 , color:  '#fff' , fontFamily :  'Montserrat-Regular' }}  > Add to Cart </Text>
<Text  style={{ fontSize :  1 , lineHeight :  20 , color:  '#050505' , fontFamily :  'Montserrat-Regular' }}  > $160.00\n $140.00 Member Price </Text>
<Text  style={{ fontSize :  18 , lineHeight :  0 , color:  '#d4d4d4' , fontFamily :  'Montserrat-Regular' }}  > 0 </Text>
<Text  style={{ fontSize :  10 , lineHeight :  14 , color:  '#979797' , fontFamily :  'Montserrat-Light' }}  > This Braun watch is a reissue of the original 1970's design from renowned design team Dietrich Lubs and Dieter Rams, both of whom have work featured in the Museum’s collection. The large watch features a numbered face, and the smaller watch has only index lines. Made of a matte stainless-steel case, black dial, mineral glass, a three-hand quartz movement, and a leather band. Water-resistant. </Text>
<Text  style={{ fontSize :  24 , lineHeight :  0 , color:  '#000' , fontFamily :  'Montserrat-Regular' }}  > Braun Classic Watch </Text>
```
#### output file './zep2RN/shop/View.jsx
```jsx
<View  style={{ width:  18, height:  12 , backgroundColor:  '#000' , }}>  </View>
<View  style={{ width:  18, height:  2 , backgroundColor:  '#dadada' , }}>  </View>
<View  style={{ width:  375, height:  328 , }}>  </View>
<View  style={{ width:  6, height:  6 , backgroundColor:  '#dadada' , }}>  </View>
<View  style={{ width:  6, height:  6 , backgroundColor:  '#ff473a' , }}>  </View>
<View  style={{ width:  248, height:  42 , backgroundColor:  '#ff473a' , }}>  </View>
```
#### output file './zep2RN/shop/Image.jsx
```jsx
<Image  source={require('./assets/menu.png')}  style={{ width:  24, height:  24 , }}  />
<Image  source={{ uri :  'https://cdn.zeplin.io/5d08b55ad0a4d25d8cb653cc/assets/8a427689-f175-4164-af03-b8c32a0bb96e.png'}}  style={{ width:  24, height:  24 , }}  />
<Image  source={require('./assets/Product Image.png')}  style={{ width:  375, height:  328 , }}  />
<Image  source={{ uri :  'https://cdn.zeplin.io/5d08b55ad0a4d25d8cb653cc/assets/42802a44-9cec-4efe-916b-96847f018ab3.png'}}  style={{ width:  375, height:  328 , }}  />
```
### Thanks to plugable templates, so you can convert to HTML or even any other UI code through template

#### output file './zep2RN/member/Text.html
```html
<div  style=" font-size : 10px ; color: '#979797' ; font-family : 'Montserrat-Light'; "  > This Braun watch is a reissue of the original 1970's design from renowned design team Dietrich Lubs and Dieter Rams, both of whom have work featured in the Museum’s collection. The large watch features a numbered face, and the smaller watch has only index lines. Made of a matte stainless-steel case, black dial, mineral glass, a three-hand quartz movement, and a leather band. Water-resistant. </div>
<div  style=" font-size : 24px ; color: '#000' ; font-family : 'Montserrat-Regular'; "  > Braun Classic Watch </div>
<div  style=" font-size : 10px ; color: '#979797' ; font-family : 'Montserrat-Light'; "  > Choose the membership that’s the best fit for you. \n Click on a level to view the full description of benefits. </div>
<div  style=" font-size : 1px ; color: '#000' ; font-family : 'Montserrat-Regular'; "  > Individual—$75\n $60 tax deductible\n \n Dual—$125\n $60 tax deductible\n \n Supporter—$300\n $60 tax deductible </div>
<div  style=" font-size : 18px ; color: '#ff473a' ; font-family : 'Montserrat-Regular'; "  > Become a Member </div>
<div  style=" font-size : 24px ; color: '#fcfcfc' ; font-family : 'Montserrat-Regular'; "  > Your Museum. \n Your Bounty of Experience. </div>
<div  style=" font-size : 12px ; color: '#fff' ; font-family : 'Montserrat-Regular'; "  > Join Today </div>
```

### Traced nested layer path which can be used to genertae a nested components
```json
[
{
    "name": "Choose the membership that’s the best fit for you. \nClick on a level to view the full description of benefits.",
    "path": [
      0,
      0
    ]
  },
  {
    "name": "Individual—$75\n$60 tax deductible\n\nDual—$125\n$60 tax deductible\n\nSupporter—$300\n$60 tax deductible",
    "path": [
      0,
      1
    ]
  },
    {
    "name": "Become a Member",
    "path": [
      2,
      2
    ]
  },
  {
    "name": "Your Museum. \nYour Bounty of Experience.",
    "path": [
      3,
      1
    ]
  },
  {
    "name": "Join Today",
    "path": [
      4,
      0,
      1
    ]
  },
]
```
# Instructions to Copy the Zeplin Design's JSON Schema URL:

![Instruction to Copy Zeplin Design URL](assets/zeplin_get_design_url_instruction.png?raw=true)

 - Each Zeplin design is rendered in the browser using the design meta-data / json-schema which we can provide as an input to our design to code conversion
 - Just load the specific design page in the browser and open the dev tools ( [How to open dev tools panel in chrome](https://developers.google.com/web/tools/chrome-devtools/open)) 
reload the page and apply text filter to 'snapshot' and type filter to XHR, you will get a unique url which loads a JSON data. 
- Right click and copy the url as in the screenshot above and keep it as the url param in the module 
```js
zep2RN.config({
  dir:'<dir name>',
  url: '<paste the copied url here>'
})
``` 

### Sample urls
```json
 [
    { dir: 'shop', url: 'https://cdn.zeplin.io/5d08b55ad0a4d25d8cb653cc/screens/5d08b60ef033df15f0082080/versions/5d08b7b8d6587e15d8cd70de/snapshot/5d08b7b8d6587e15d8cd70df?Expires=1563445967&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uemVwbGluLmlvLzVkMDhiNTVhZDBhNGQyNWQ4Y2I2NTNjYy9zY3JlZW5zLzVkMDhiNjBlZjAzM2RmMTVmMDA4MjA4MC92ZXJzaW9ucy81ZDA4YjdiOGQ2NTg3ZTE1ZDhjZDcwZGUvc25hcHNob3QvNWQwOGI3YjhkNjU4N2UxNWQ4Y2Q3MGRmIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTYzNDQ1OTY3fX19XX0_&Signature=ftLRI4xMM33kGRTwxUktt4Avvuq7w-SzqhJB8CNUjq3Q2O9WXNOsg40Ek8iE35r8PG4JZNtcVgyCj2WTJf4FcrdnZbaD9oaJSy19nHUX4v5uEjMzompe6mHbKdozvt6bFhnpxvlye0NRfnrOsckM8ScBooXDlvZHrayHrDdGeV8MWJYQ8YVruUYGr3Y~JGPpiQUUif~YF64u3-y2WHGg9xkrsRXpDQa-gqTqV8j4TOPcbV9A2ob-QytukXGbf5UKau2-zsWQcD8SwW4RQBoBQia66eRecK2AWr~6X37dYzCBVdPW4Qk7-n-UYa2ihDMC0j6dF11ncD7ZmzVyzK38Kw__&Key-Pair-Id=APKAJKD6BRIMESUCGIPA' },
    { dir: 'member', url: 'https://cdn.zeplin.io/5d08b55ad0a4d25d8cb653cc/screens/5d08b60e19680119d0ec8514/versions/5d08b7b83faef15d5c332eb9/snapshot/5d08b7b83faef15d5c332eba?Expires=1563446651&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uemVwbGluLmlvLzVkMDhiNTVhZDBhNGQyNWQ4Y2I2NTNjYy9zY3JlZW5zLzVkMDhiNjBlMTk2ODAxMTlkMGVjODUxNC92ZXJzaW9ucy81ZDA4YjdiODNmYWVmMTVkNWMzMzJlYjkvc25hcHNob3QvNWQwOGI3YjgzZmFlZjE1ZDVjMzMyZWJhIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTYzNDQ2NjUxfX19XX0_&Signature=BIHel8hiiancNyrC9XlNP4ThllPGpncc126o1HtRfI5nuXbw2rBk-2F~86MDiyWOo87I2IO8R0akUkF9WIxTmD~fbv~TZ6MzgvGXbE187eWCby6KGGfD4J78VZ727rn9SclSmFcTNsysOWjJl8uJKU-JhgROkalbcLI4juAW8ney6JtEd37SnXkEPkJK6TSHnALXnNbxwKeETdwQh6Kvd7tJWn8q66PSngWD9vU~yQ2zKwMPdaup9ujkB-BT5N-seh8ZBygJ22-we3HUXdnMBiw1cFyT3WxuOSzJwh9RpJMTjDHKqqMTm1O17T-wUeQOK22kSmJPz2pO2dVtHi9fPQ__&Key-Pair-Id=APKAJKD6BRIMESUCGIPA' },
    { dir: 'home', url: 'https://cdn.zeplin.io/5d08b55ad0a4d25d8cb653cc/screens/5d08b60ef033df15f0082041/versions/5d08b7bf68714a15d2e9fe5e/snapshot/5d08b7bf68714a15d2e9fe5f?Expires=1563444763&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uemVwbGluLmlvLzVkMDhiNTVhZDBhNGQyNWQ4Y2I2NTNjYy9zY3JlZW5zLzVkMDhiNjBlZjAzM2RmMTVmMDA4MjA0MS92ZXJzaW9ucy81ZDA4YjdiZjY4NzE0YTE1ZDJlOWZlNWUvc25hcHNob3QvNWQwOGI3YmY2ODcxNGExNWQyZTlmZTVmIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTYzNDQ0NzYzfX19XX0_&Signature=EdmTI3BHVWBV7PHpNSnCABlog2n7hA8S5ZL~upO3W0yxMI8Nh0zh1Gf1cqb1y0G5cfJ4vmvDHdms35tvgWbfRS3p-ZNlR3Yux6Mo-~YPIOuSMvLdGbnyi3idKgUVaaZf9OSFN7t9i08x8-RoaqnT0SUlGl6FVv9RwJUH71uzhNzz7ZYcw0SLz~AA3qEnKebJbNHdw7ETLL-vFCjZ1HGj4tNIlESgnxRqoY1fdkRgV4AphPKIhysTOthE05xgH1kkBAblgXtSrjBLthD28i5psakVH4tm3LPK9UsQO4eA5ut1lgRLqFVv-bbGvSO9gFcqovoYPSpSRezvdWL077R-aw__&Key-Pair-Id=APKAJKD6BRIMESUCGIPA' },
    { dir: 'menu', url: 'https://cdn.zeplin.io/5d08b55ad0a4d25d8cb653cc/screens/5d08b60eb2c0555e11af480a/versions/5d08b7b8feb5245daafaf0cf/snapshot/5d08b7b8feb5245daafaf0d0?Expires=1563445857&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uemVwbGluLmlvLzVkMDhiNTVhZDBhNGQyNWQ4Y2I2NTNjYy9zY3JlZW5zLzVkMDhiNjBlYjJjMDU1NWUxMWFmNDgwYS92ZXJzaW9ucy81ZDA4YjdiOGZlYjUyNDVkYWFmYWYwY2Yvc25hcHNob3QvNWQwOGI3YjhmZWI1MjQ1ZGFhZmFmMGQwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTYzNDQ1ODU3fX19XX0_&Signature=AX6V2tmGSItbalc-AbazjLmaq-OvcgKqZFEq1R063bzz5dRz0wLxCWHu57zAydi~qk1tJpXwN9TMmLgYzE~sEq7SoNBR1FaXsFuB9GaDCp9CQFZTX14ZfrInaX7kJMDk0yBVJ68IMq2GekxI8sGKvj8rPcyIyVORktMrNMvK9OOAaDHC1Oh2xCw8zcnYFsIami2-kZtere2hVocf8LTCLvhU3s1P6Z2RlBF-FaD~DkeQW4bvVcB6EXCjZC3YpoM8S6UluOBr9ADt5h0~hpTyM6g8izdomjdY-tsINIiBvhRHQE5j~V4W3VlJ9vTFrhwtjop~GyFsCS5OHeJzeAjK3w__&Key-Pair-Id=APKAJKD6BRIMESUCGIPA' },
    { dir: 'exhibition', url: 'https://cdn.zeplin.io/5d08b55ad0a4d25d8cb653cc/screens/5d08b60ed0a4d25d8cb65bd6/versions/5d08b7b8d6587e15d8cd711d/snapshot/5d08b7b8d6587e15d8cd711e?Expires=1563446693&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uemVwbGluLmlvLzVkMDhiNTVhZDBhNGQyNWQ4Y2I2NTNjYy9zY3JlZW5zLzVkMDhiNjBlZDBhNGQyNWQ4Y2I2NWJkNi92ZXJzaW9ucy81ZDA4YjdiOGQ2NTg3ZTE1ZDhjZDcxMWQvc25hcHNob3QvNWQwOGI3YjhkNjU4N2UxNWQ4Y2Q3MTFlIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTYzNDQ2NjkzfX19XX0_&Signature=fnlQWh1SCnBjMRBKbosoVgTrLF1ZOVoQ~iAnkxbiIWm-qK1K6aVd3ufqCSMvCjWJ8ZSSioendGQpa4ohLSRZF5qLgq-z-tsknwEGe3UKY-psxNA~H3zDa4nrXfvxmv6RHdevm-PA4tWsVV~cmVq78MkLQHanlRFfnr9ERk3VU1HsJzTyNgJCpuwyiZIKCBj6FyxMvllxKQvPPoEFiC49W~Wm9coalG5f~LaFl115eeNXd4X3NAh8MUwTAVN1vEBQDJDywbGcJ3eUlsbWYOb9v4WtKc~qyl15zDpLW~UjWgTWI-4UESTPkWXqmACA9Jomiwx43L4T2tF0o9rQRvppgw__&Key-Pair-Id=APKAJKD6BRIMESUCGIPA' },
    { dir: 'collections', url: 'https://cdn.zeplin.io/5d08b55ad0a4d25d8cb653cc/screens/5d08b60e6992365e04bbc4cd/versions/5d08b7b8d6587e15d8cd7093/snapshot/5d08b7b8d6587e15d8cd7094?Expires=1563445739&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uemVwbGluLmlvLzVkMDhiNTVhZDBhNGQyNWQ4Y2I2NTNjYy9zY3JlZW5zLzVkMDhiNjBlNjk5MjM2NWUwNGJiYzRjZC92ZXJzaW9ucy81ZDA4YjdiOGQ2NTg3ZTE1ZDhjZDcwOTMvc25hcHNob3QvNWQwOGI3YjhkNjU4N2UxNWQ4Y2Q3MDk0IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTYzNDQ1NzM5fX19XX0_&Signature=JuPwDjFGRj-GbYxEOXe3weFu-YN5iI1cIqmnoPZO0-~7JymC0iuO9E7jT31gbO~XLKlnHPjW4WnValzxq4LbQp6K0o9B9RGj9rU9koXHPDJY7X3y94f3ird~~hQE4NVR0Xv0jGsPCmrIM5aIG3TqnyvPxUBduH7jvEFozVfxuTvAtA3shv1rVuR9B5DS00SccqunoSkJnSxDdUrRIMfEu9q9fHU86dZ4xe8g253qIS89raaV5pOb5Dy4vKAhe87NsAgotuymVvQ3AuX3JvXcBQo4-KqWVazgF0JwTfH-u796lhzMOFz7-j-KIDGuUANlIEx5k~bnUtkawBeLrwTBwA__&Key-Pair-Id=APKAJKD6BRIMESUCGIPA' },
    { dir: 'plan', url: 'https://cdn.zeplin.io/5d08b55ad0a4d25d8cb653cc/screens/5d08b60ee4149016021e46d4/versions/5d08b7b84d9f605dce8d6de5/snapshot/5d08b7b84d9f605dce8d6de6?Expires=1563446711&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uemVwbGluLmlvLzVkMDhiNTVhZDBhNGQyNWQ4Y2I2NTNjYy9zY3JlZW5zLzVkMDhiNjBlZTQxNDkwMTYwMjFlNDZkNC92ZXJzaW9ucy81ZDA4YjdiODRkOWY2MDVkY2U4ZDZkZTUvc25hcHNob3QvNWQwOGI3Yjg0ZDlmNjA1ZGNlOGQ2ZGU2IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTYzNDQ2NzExfX19XX0_&Signature=C7KMTzk5cex6RJQCLVNMa1Ve5LJXvF3ToQbCPi7uH4Y7meG9b03oTtruCtKyF-XucX9O7zt9ebjBwSaaAITFLocj7p98wgRd4lNjJnHlyRpeOr7Kf8HYYlekAnraprF6TWVSHJddZw7E9RgNztBz2CvLOtGTCRCOXPaR8nswsZm-bL8meisAY~2ZBlsYoC8ZThQDRm4gq6Z-zcShn6irNn1OYki5Q9wxfLRLJZtvr3cWzRcp7-1jBhZjGcupk0374dRTd6r0XZ1dnbt0Qfxu~QxgGNvLqSjfe2txETvtFdtQp41dKHRm0X7t3mTXHSgliFBRPVOo4cDn6Mqw9SD2rA__&Key-Pair-Id=APKAJKD6BRIMESUCGIPA' }

]
```
| <img src="assets/zeplin_design_json.png?raw=true" height="550">  | <img src="assets/shop.png?raw=true" width="300"> |
# Conversion process

Zeplin Design page provides a fairly clean json data that structures the layers of the design, which makes the process easier, but there is still a lot of processing involved.  Here's the basic steps:

1. Get the design json url link
2. parse the data recursively to dive into the nested layers and flatten them
3. from the flattened layers generate code snippets/components
4. Trace the end layer from parent layer to form a path array to traverse back the root layer
5. using the path array we can create the nested Ui codes/components 
6. Apply different UI templates to generate respective UI frameworks code syntax
9. Export to an output file


## How much time does this save?

I've found that screens that would normally take a long time would reduced to less time, as it provides you the snippet/code automatically that you can simply use or copy/paste.

## What can't it do yet?

This is a work in progress, so there are a few things that might not do well, in that case please raise issues or if you would like to contribute, PR or fix , it would be really great-full!

## How can I help?

If you'd like to help, I'd love to have you involved!  Feel free to file issues, or send me an email with any Zeplin Design / schema file URL that doesn't work quite right, and I'll also review and merge pull requests as well.



# Sample / Test

You can run the test or see a sample by running the 
```bash
node ./test/index.js
```
or
```bash
npm run test
```
## Test result
### The code files will be generated in the respective paths
#### console logs
```bash
> node ./test/index.js

// TEST 1 --------------------------------------------
Total Layers Count:  59
Total Types      :  [ 'group', 'shape', 'text' ]
Total Types Count:  3
Zeplin Design schema successfully converted to React Native code snippets for <Text/> , <View/> , <Image/>
// TEST 2 --------------------------------------------
./zep2RN/shop/text.jsx File Write success
./zep2RN/shop/image.jsx File Write success
./zep2RN/shop/view.jsx File Write success
Total Layers Count:  109
Total Types      :  [ 'group', 'shape', 'text', 'image' ]
Total Types Count:  4
Zeplin Design schema successfully converted to React Native code snippets for <Text/> , <View/> , <Image/>
// TEST 3 --------------------------------------------
./zep2RN/member/view.html File Write success
./zep2RN/member/text.html File Write success
./zep2RN/member/image.html File Write success
Total Layers Count:  169
Total Types      :  [ 'group', 'shape', 'text', 'image' ]
Total Types Count:  4
Zeplin Design schema successfully converted to React Native code snippets for <Text/> , <View/> , <Image/>
// TEST 4 --------------------------------------------
./zep2RN/home/view.jsx File Write success
./zep2RN/home/image.jsx File Write success
./zep2RN/home/text.jsx File Write success
Total Layers Count:  234
Total Types      :  [ 'group', 'image', 'shape', 'text' ]
Total Types Count:  4
Zeplin Design schema successfully converted to React Native code snippets for <Text/> , <View/> , <Image/>
// TEST 5 --------------------------------------------
./zep2RN/menu/image.jsx File Write success
./zep2RN/menu/text.jsx File Write success
./zep2RN/menu/view.jsx File Write success
Total Layers Count:  297
Total Types      :  [ 'image', 'group', 'shape', 'text' ]
Total Types Count:  4
Zeplin Design schema successfully converted to React Native code snippets for <Text/> , <View/> , <Image/>
// TEST 6 --------------------------------------------
./zep2RN/exhibition/view.jsx File Write success
./zep2RN/exhibition/text.jsx File Write success
./zep2RN/exhibition/image.jsx File Write success
Total Layers Count:  358
Total Types      :  [ 'image', 'group', 'shape', 'text' ]
Total Types Count:  4
Zeplin Design schema successfully converted to React Native code snippets for <Text/> , <View/> , <Image/>
// TEST 7 --------------------------------------------
./zep2RN/collections/view.jsx File Write success
./zep2RN/collections/image.jsx File Write success
./zep2RN/collections/text.jsx File Write success
Total Layers Count:  430
Total Types      :  [ 'image', 'group', 'shape', 'text' ]
Total Types Count:  4
Zeplin Design schema successfully converted to React Native code snippets for <Text/> , <View/> , <Image/>
./zep2RN/plan/text.jsx File Write success
./zep2RN/plan/view.jsx File Write success
./zep2RN/plan/image.jsx File Write success

```

You can see that it might not perfect - but it provides a really good starting point, and it's getting better all the time!


