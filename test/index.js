const zep2RN = require('../')

const designs = [
    { dir: 'shop', url: 'https://cdn.zeplin.io/5d08b55ad0a4d25d8cb653cc/screens/5d08b60ef033df15f0082080/versions/5d08b7b8d6587e15d8cd70de/snapshot/5d08b7b8d6587e15d8cd70df?Expires=1563445967&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uemVwbGluLmlvLzVkMDhiNTVhZDBhNGQyNWQ4Y2I2NTNjYy9zY3JlZW5zLzVkMDhiNjBlZjAzM2RmMTVmMDA4MjA4MC92ZXJzaW9ucy81ZDA4YjdiOGQ2NTg3ZTE1ZDhjZDcwZGUvc25hcHNob3QvNWQwOGI3YjhkNjU4N2UxNWQ4Y2Q3MGRmIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTYzNDQ1OTY3fX19XX0_&Signature=ftLRI4xMM33kGRTwxUktt4Avvuq7w-SzqhJB8CNUjq3Q2O9WXNOsg40Ek8iE35r8PG4JZNtcVgyCj2WTJf4FcrdnZbaD9oaJSy19nHUX4v5uEjMzompe6mHbKdozvt6bFhnpxvlye0NRfnrOsckM8ScBooXDlvZHrayHrDdGeV8MWJYQ8YVruUYGr3Y~JGPpiQUUif~YF64u3-y2WHGg9xkrsRXpDQa-gqTqV8j4TOPcbV9A2ob-QytukXGbf5UKau2-zsWQcD8SwW4RQBoBQia66eRecK2AWr~6X37dYzCBVdPW4Qk7-n-UYa2ihDMC0j6dF11ncD7ZmzVyzK38Kw__&Key-Pair-Id=APKAJKD6BRIMESUCGIPA' },
    { dir: 'member', url: 'https://cdn.zeplin.io/5d08b55ad0a4d25d8cb653cc/screens/5d08b60e19680119d0ec8514/versions/5d08b7b83faef15d5c332eb9/snapshot/5d08b7b83faef15d5c332eba?Expires=1563446651&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uemVwbGluLmlvLzVkMDhiNTVhZDBhNGQyNWQ4Y2I2NTNjYy9zY3JlZW5zLzVkMDhiNjBlMTk2ODAxMTlkMGVjODUxNC92ZXJzaW9ucy81ZDA4YjdiODNmYWVmMTVkNWMzMzJlYjkvc25hcHNob3QvNWQwOGI3YjgzZmFlZjE1ZDVjMzMyZWJhIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTYzNDQ2NjUxfX19XX0_&Signature=BIHel8hiiancNyrC9XlNP4ThllPGpncc126o1HtRfI5nuXbw2rBk-2F~86MDiyWOo87I2IO8R0akUkF9WIxTmD~fbv~TZ6MzgvGXbE187eWCby6KGGfD4J78VZ727rn9SclSmFcTNsysOWjJl8uJKU-JhgROkalbcLI4juAW8ney6JtEd37SnXkEPkJK6TSHnALXnNbxwKeETdwQh6Kvd7tJWn8q66PSngWD9vU~yQ2zKwMPdaup9ujkB-BT5N-seh8ZBygJ22-we3HUXdnMBiw1cFyT3WxuOSzJwh9RpJMTjDHKqqMTm1O17T-wUeQOK22kSmJPz2pO2dVtHi9fPQ__&Key-Pair-Id=APKAJKD6BRIMESUCGIPA' },
    { dir: 'home', url: 'https://cdn.zeplin.io/5d08b55ad0a4d25d8cb653cc/screens/5d08b60ef033df15f0082041/versions/5d08b7bf68714a15d2e9fe5e/snapshot/5d08b7bf68714a15d2e9fe5f?Expires=1563444763&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uemVwbGluLmlvLzVkMDhiNTVhZDBhNGQyNWQ4Y2I2NTNjYy9zY3JlZW5zLzVkMDhiNjBlZjAzM2RmMTVmMDA4MjA0MS92ZXJzaW9ucy81ZDA4YjdiZjY4NzE0YTE1ZDJlOWZlNWUvc25hcHNob3QvNWQwOGI3YmY2ODcxNGExNWQyZTlmZTVmIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTYzNDQ0NzYzfX19XX0_&Signature=EdmTI3BHVWBV7PHpNSnCABlog2n7hA8S5ZL~upO3W0yxMI8Nh0zh1Gf1cqb1y0G5cfJ4vmvDHdms35tvgWbfRS3p-ZNlR3Yux6Mo-~YPIOuSMvLdGbnyi3idKgUVaaZf9OSFN7t9i08x8-RoaqnT0SUlGl6FVv9RwJUH71uzhNzz7ZYcw0SLz~AA3qEnKebJbNHdw7ETLL-vFCjZ1HGj4tNIlESgnxRqoY1fdkRgV4AphPKIhysTOthE05xgH1kkBAblgXtSrjBLthD28i5psakVH4tm3LPK9UsQO4eA5ut1lgRLqFVv-bbGvSO9gFcqovoYPSpSRezvdWL077R-aw__&Key-Pair-Id=APKAJKD6BRIMESUCGIPA' },
    { dir: 'menu', url: 'https://cdn.zeplin.io/5d08b55ad0a4d25d8cb653cc/screens/5d08b60eb2c0555e11af480a/versions/5d08b7b8feb5245daafaf0cf/snapshot/5d08b7b8feb5245daafaf0d0?Expires=1563445857&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uemVwbGluLmlvLzVkMDhiNTVhZDBhNGQyNWQ4Y2I2NTNjYy9zY3JlZW5zLzVkMDhiNjBlYjJjMDU1NWUxMWFmNDgwYS92ZXJzaW9ucy81ZDA4YjdiOGZlYjUyNDVkYWFmYWYwY2Yvc25hcHNob3QvNWQwOGI3YjhmZWI1MjQ1ZGFhZmFmMGQwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTYzNDQ1ODU3fX19XX0_&Signature=AX6V2tmGSItbalc-AbazjLmaq-OvcgKqZFEq1R063bzz5dRz0wLxCWHu57zAydi~qk1tJpXwN9TMmLgYzE~sEq7SoNBR1FaXsFuB9GaDCp9CQFZTX14ZfrInaX7kJMDk0yBVJ68IMq2GekxI8sGKvj8rPcyIyVORktMrNMvK9OOAaDHC1Oh2xCw8zcnYFsIami2-kZtere2hVocf8LTCLvhU3s1P6Z2RlBF-FaD~DkeQW4bvVcB6EXCjZC3YpoM8S6UluOBr9ADt5h0~hpTyM6g8izdomjdY-tsINIiBvhRHQE5j~V4W3VlJ9vTFrhwtjop~GyFsCS5OHeJzeAjK3w__&Key-Pair-Id=APKAJKD6BRIMESUCGIPA' },
    { dir: 'exhibition', url: 'https://cdn.zeplin.io/5d08b55ad0a4d25d8cb653cc/screens/5d08b60ed0a4d25d8cb65bd6/versions/5d08b7b8d6587e15d8cd711d/snapshot/5d08b7b8d6587e15d8cd711e?Expires=1563446693&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uemVwbGluLmlvLzVkMDhiNTVhZDBhNGQyNWQ4Y2I2NTNjYy9zY3JlZW5zLzVkMDhiNjBlZDBhNGQyNWQ4Y2I2NWJkNi92ZXJzaW9ucy81ZDA4YjdiOGQ2NTg3ZTE1ZDhjZDcxMWQvc25hcHNob3QvNWQwOGI3YjhkNjU4N2UxNWQ4Y2Q3MTFlIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTYzNDQ2NjkzfX19XX0_&Signature=fnlQWh1SCnBjMRBKbosoVgTrLF1ZOVoQ~iAnkxbiIWm-qK1K6aVd3ufqCSMvCjWJ8ZSSioendGQpa4ohLSRZF5qLgq-z-tsknwEGe3UKY-psxNA~H3zDa4nrXfvxmv6RHdevm-PA4tWsVV~cmVq78MkLQHanlRFfnr9ERk3VU1HsJzTyNgJCpuwyiZIKCBj6FyxMvllxKQvPPoEFiC49W~Wm9coalG5f~LaFl115eeNXd4X3NAh8MUwTAVN1vEBQDJDywbGcJ3eUlsbWYOb9v4WtKc~qyl15zDpLW~UjWgTWI-4UESTPkWXqmACA9Jomiwx43L4T2tF0o9rQRvppgw__&Key-Pair-Id=APKAJKD6BRIMESUCGIPA' },
    { dir: 'collections', url: 'https://cdn.zeplin.io/5d08b55ad0a4d25d8cb653cc/screens/5d08b60e6992365e04bbc4cd/versions/5d08b7b8d6587e15d8cd7093/snapshot/5d08b7b8d6587e15d8cd7094?Expires=1563445739&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uemVwbGluLmlvLzVkMDhiNTVhZDBhNGQyNWQ4Y2I2NTNjYy9zY3JlZW5zLzVkMDhiNjBlNjk5MjM2NWUwNGJiYzRjZC92ZXJzaW9ucy81ZDA4YjdiOGQ2NTg3ZTE1ZDhjZDcwOTMvc25hcHNob3QvNWQwOGI3YjhkNjU4N2UxNWQ4Y2Q3MDk0IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTYzNDQ1NzM5fX19XX0_&Signature=JuPwDjFGRj-GbYxEOXe3weFu-YN5iI1cIqmnoPZO0-~7JymC0iuO9E7jT31gbO~XLKlnHPjW4WnValzxq4LbQp6K0o9B9RGj9rU9koXHPDJY7X3y94f3ird~~hQE4NVR0Xv0jGsPCmrIM5aIG3TqnyvPxUBduH7jvEFozVfxuTvAtA3shv1rVuR9B5DS00SccqunoSkJnSxDdUrRIMfEu9q9fHU86dZ4xe8g253qIS89raaV5pOb5Dy4vKAhe87NsAgotuymVvQ3AuX3JvXcBQo4-KqWVazgF0JwTfH-u796lhzMOFz7-j-KIDGuUANlIEx5k~bnUtkawBeLrwTBwA__&Key-Pair-Id=APKAJKD6BRIMESUCGIPA' },
    { dir: 'plan', url: 'https://cdn.zeplin.io/5d08b55ad0a4d25d8cb653cc/screens/5d08b60ee4149016021e46d4/versions/5d08b7b84d9f605dce8d6de5/snapshot/5d08b7b84d9f605dce8d6de6?Expires=1563446711&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uemVwbGluLmlvLzVkMDhiNTVhZDBhNGQyNWQ4Y2I2NTNjYy9zY3JlZW5zLzVkMDhiNjBlZTQxNDkwMTYwMjFlNDZkNC92ZXJzaW9ucy81ZDA4YjdiODRkOWY2MDVkY2U4ZDZkZTUvc25hcHNob3QvNWQwOGI3Yjg0ZDlmNjA1ZGNlOGQ2ZGU2IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTYzNDQ2NzExfX19XX0_&Signature=C7KMTzk5cex6RJQCLVNMa1Ve5LJXvF3ToQbCPi7uH4Y7meG9b03oTtruCtKyF-XucX9O7zt9ebjBwSaaAITFLocj7p98wgRd4lNjJnHlyRpeOr7Kf8HYYlekAnraprF6TWVSHJddZw7E9RgNztBz2CvLOtGTCRCOXPaR8nswsZm-bL8meisAY~2ZBlsYoC8ZThQDRm4gq6Z-zcShn6irNn1OYki5Q9wxfLRLJZtvr3cWzRcp7-1jBhZjGcupk0374dRTd6r0XZ1dnbt0Qfxu~QxgGNvLqSjfe2txETvtFdtQp41dKHRm0X7t3mTXHSgliFBRPVOo4cDn6Mqw9SD2rA__&Key-Pair-Id=APKAJKD6BRIMESUCGIPA' }

]

const test = async function () {
    try {

        console.log('// TEST 1 --------------------------------------------')
        zep2RN.config({ url: designs[0].url, dir: designs[0].dir })
        result = await zep2RN.convert()
        console.log(result)


        console.log('// TEST 2 --------------------------------------------')
        zep2RN.config({ url: designs[1].url, dir: designs[1].dir, template: 'html' })
        result = await zep2RN.convert()
        console.log(result)

        console.log('// TEST 3 --------------------------------------------')
        zep2RN.config({ url: designs[2].url, dir: designs[2].dir })
        result = await zep2RN.convert()
        console.log(result)


        console.log('// TEST 4 --------------------------------------------')
        zep2RN.config({ url: designs[3].url, dir: designs[3].dir })
        result = await zep2RN.convert()
        console.log(result)


        console.log('// TEST 5 --------------------------------------------')
        zep2RN.config({ url: designs[4].url, dir: designs[4].dir })
        result = await zep2RN.convert()
        console.log(result)


        console.log('// TEST 6 --------------------------------------------')
        zep2RN.config({ url: designs[5].url, dir: designs[5].dir })
        result = await zep2RN.convert()
        console.log(result)


        console.log('// TEST 7 --------------------------------------------')
        zep2RN.config({ url: designs[6].url, dir: designs[6].dir })
        result = await zep2RN.convert()
        console.log(result)


    } catch (err) {
        console.log(err)
    }
}


test()
