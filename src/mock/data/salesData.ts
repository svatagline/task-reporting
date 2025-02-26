export const salesDashboardData = {
    statisticData: {
        revenue: {
            value: 21827.13,
            growShrink: 11.4,
        },
        orders: {
            value: 1758,
            growShrink: -3.2,
        },
        purchases: {
            value: 7249.31,
            growShrink: 5.7,
        },
    },
    salesReportData: {
        series: [
            {
                name: 'Online Sales',
                data: [24, 33, 29, 36, 34, 43, 40, 47, 45, 48, 46, 55],
            },
            {
                name: 'Marketing Sales',
                data: [20, 26, 23, 24, 22, 29, 27, 36, 32, 35, 32, 38],
            },
        ],
        categories: [
            '01 Jan',
            '02 Jan',
            '03 Jan',
            '04 Jan',
            '05 Jan',
            '06 Jan',
            '07 Jan',
            '08 Jan',
            '09 Jan',
            '10 Jan',
            '11 Jan',
            '12 Jan',
        ],
    },
    toptasksData: [
        {
            id: '12',
            name: 'Luminaire Giotto Headphones',
            img: '/img/products/product-1.jpg',
            sold: 252,
        },
        {
            id: '14',
            name: 'Black Sneaker',
            img: '/img/products/product-3.jpg',
            sold: 186,
        },
        {
            id: '15',
            name: 'Gray Hoodies',
            img: '/img/products/product-4.jpg',
            sold: 166,
        },
        {
            id: '16',
            name: 'Blue Backpack',
            img: '/img/products/product-5.jpg',
            sold: 93,
        },
        {
            id: '18',
            name: 'Strip Analog Watch',
            img: '/img/products/product-7.jpg',
            sold: 81,
        },
    ],
    latestOrderData: [
        {
            id: '95954',
            date: 1660132800,
            customer: 'Ron Vargas',
            status: 0,
            paymentMehod: 'visa',
            paymentIdendifier: '•••• 6165',
            totalAmount: 168,
        },
        {
            id: '95423',
            date: 1659132800,
            customer: 'Carolyn Hanso',
            status: 0,
            paymentMehod: 'visa',
            paymentIdendifier: '•••• 7128',
            totalAmount: 523,
        },
        {
            id: '92903',
            date: 1658132800,
            customer: 'Gabriella May',
            status: 1,
            paymentMehod: 'paypal',
            paymentIdendifier: '••••@gmail.com',
            totalAmount: 81,
        },
        {
            id: '92627',
            date: 1657332800,
            customer: 'Tara Fletcher',
            status: 2,
            paymentMehod: 'master',
            paymentIdendifier: '•••• 0921',
            totalAmount: 279,
        },
        {
            id: '89332',
            date: 1654132800,
            customer: 'Eileen Horton',
            status: 0,
            paymentMehod: 'paypal',
            paymentIdendifier: '••••@gmail.com',
            totalAmount: 597,
        },
        {
            id: '86497',
            date: 1647632800,
            customer: 'Lloyd Obrien',
            status: 2,
            paymentMehod: 'visa',
            paymentIdendifier: '•••• 0443',
            totalAmount: 189,
        },
        {
            id: '86212',
            date: 1646832800,
            customer: 'Tara Fletcher',
            status: 0,
            paymentMehod: 'paypal',
            paymentIdendifier: '••••@gmail.com',
            totalAmount: 672,
        },
    ],
    salesByCategoriesData: {
        labels: ['Devices', 'Watches', 'Bags', 'Shoes'],
        data: [351, 246, 144, 83],
    },
}

export const tasksData = [
    {
        id: '12',
        name: 'Luminaire Giotto Headphones',
        productCode: 'BIS-012',
        img: '/img/products/product-1.jpg',
        imgList: [
            {
                id: '12-img-0',
                name: 'image-1',
                img: '/img/products/product-1.jpg',
            },
            {
                id: '12-img-1',
                name: 'image-2',
                img: '/img/products/product-1-2.jpg',
            },
            {
                id: '12-img-2',
                name: 'image-3',
                img: '/img/products/product-1-3.jpg',
            },
            {
                id: '12-img-3',
                name: 'image-4',
                img: '/img/products/product-1-4.jpg',
            },
        ],
        category: 'devices',
        price: 252,
        stock: 46,
        status: 0,
        costPerItem: 12,
        bulkDiscountPrice: 68,
        taxRate: 6,
        tags: ['trend', 'unisex'],
        brand: 'Luminaire',
        vendor: 'WindForce co, Ltd',
        description:
            '<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><br/><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>',
    },
    {
        id: '13',
        name: 'White Backpack',
        productCode: 'BIS-013',
        img: '/img/products/product-2.jpg',
        imgList: [
            {
                id: '13-img-0',
                name: 'image-1',
                img: '/img/products/product-2.jpg',
            },
            {
                id: '13-img-1',
                name: 'image-2',
                img: '/img/products/product-2-2.jpg',
            },
        ],
        category: 'bags',
        price: 139,
        stock: 28,
        status: 0,
        costPerItem: 12,
        bulkDiscountPrice: 68,
        taxRate: 6,
        tags: ['trend', 'unisex'],
        brand: 'Adidas',
        vendor: 'WindForce co, Ltd',
        description:
            '<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><br/><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>',
    },
    {
        id: '14',
        name: 'Black Sneaker',
        productCode: 'BIS-014',
        img: '/img/products/product-3.jpg',
        imgList: [
            {
                id: '14-img-0',
                name: 'image-1',
                img: '/img/products/product-3.jpg',
            },
        ],
        category: 'shoes',
        price: 99,
        stock: 52,
        status: 0,
        costPerItem: 12,
        bulkDiscountPrice: 68,
        taxRate: 6,
        tags: ['trend', 'unisex'],
        brand: 'Adidas',
        vendor: 'WindForce co, Ltd',
        description:
            '<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><br/><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>',
    },
    {
        id: '15',
        name: 'Gray Hoodies',
        productCode: 'BIS-015',
        img: '/img/products/product-4.jpg',
        imgList: [
            {
                id: '15-img-0',
                name: 'image-1',
                img: '/img/products/product-4.jpg',
            },
        ],
        category: 'cloths',
        price: 68,
        stock: 92,
        status: 0,
        costPerItem: 12,
        bulkDiscountPrice: 68,
        taxRate: 6,
        tags: ['trend', 'unisex'],
        brand: 'Adidas',
        vendor: 'WindForce co, Ltd',
        description:
            '<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><br/><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>',
    },
    {
        id: '16',
        name: 'Blue Backpack',
        productCode: 'BIS-016',
        img: '/img/products/product-5.jpg',
        imgList: [
            {
                id: '16-img-0',
                name: 'image-1',
                img: '/img/products/product-5.jpg',
            },
        ],
        category: 'bags',
        price: 70,
        stock: 0,
        status: 2,
        costPerItem: 12,
        bulkDiscountPrice: 68,
        taxRate: 6,
        tags: ['trend', 'unisex'],
        brand: 'Adidas',
        vendor: 'WindForce co, Ltd',
        description:
            '<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><br/><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>',
    },
    {
        id: '17',
        name: 'White Sneaker',
        productCode: 'BIS-017',
        img: '/img/products/product-6.jpg',
        imgList: [
            {
                id: '17-img-0',
                name: 'image-1',
                img: '/img/products/product-6.jpg',
            },
        ],
        category: 'shoes',
        price: 29,
        stock: 18,
        status: 0,
        costPerItem: 12,
        bulkDiscountPrice: 68,
        taxRate: 6,
        tags: ['trend', 'unisex'],
        brand: 'Adidas',
        vendor: 'WindForce co, Ltd',
        description:
            '<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><br/><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>',
    },
    {
        id: '18',
        name: 'Strip Analog Watch',
        productCode: 'BIS-018',
        img: '/img/products/product-7.jpg',
        imgList: [
            {
                id: '18-img-0',
                name: 'image-1',
                img: '/img/products/product-7.jpg',
            },
        ],
        category: 'watches',
        price: 389,
        stock: 7,
        status: 1,
        costPerItem: 12,
        bulkDiscountPrice: 68,
        taxRate: 6,
        tags: ['trend', 'unisex'],
        brand: 'Adidas',
        vendor: 'WindForce co, Ltd',
        description:
            '<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><br/><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>',
    },
    {
        id: '19',
        name: 'Beats Solo Headphone',
        productCode: 'BIS-019',
        img: '/img/products/product-8.jpg',
        imgList: [
            {
                id: '19-img-0',
                name: 'image-1',
                img: '/img/products/product-8.jpg',
            },
        ],
        category: 'devices',
        price: 869,
        stock: 0,
        status: 2,
        costPerItem: 12,
        bulkDiscountPrice: 68,
        taxRate: 6,
        tags: ['trend', 'unisex'],
        brand: 'Beat',
        vendor: 'WindForce co, Ltd',
        description:
            '<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><br/><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>',
    },
    {
        id: '20',
        name: 'Apple Macbook Pro',
        productCode: 'BIS-020',
        img: '/img/products/product-9.jpg',
        imgList: [
            {
                id: '20-img-0',
                name: 'image-1',
                img: '/img/products/product-9.jpg',
            },
        ],
        category: 'devices',
        price: 1599,
        stock: 27,
        status: 0,
        costPerItem: 12,
        bulkDiscountPrice: 68,
        taxRate: 6,
        tags: ['trend', 'unisex'],
        brand: 'Apple',
        vendor: 'WindForce co, Ltd',
        description:
            '<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><br/><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>',
    },
    {
        id: '21',
        name: 'Bronze Analog Watch',
        productCode: 'BIS-021',
        img: '/img/products/product-10.jpg',
        imgList: [
            {
                id: '21-img-0',
                name: 'image-1',
                img: '/img/products/product-10.jpg',
            },
        ],
        category: 'watches',
        price: 729,
        stock: 6,
        status: 1,
        costPerItem: 12,
        bulkDiscountPrice: 68,
        taxRate: 6,
        tags: ['trend', 'unisex'],
        brand: 'Seiko',
        vendor: 'WindForce co, Ltd',
        description:
            '<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><br/><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>',
    },
    {
        id: '22',
        name: 'Apple Watch',
        productCode: 'BIS-022',
        img: '/img/products/product-11.jpg',
        imgList: [
            {
                id: '22-img-0',
                name: 'image-1',
                img: '/img/products/product-11.jpg',
            },
        ],
        category: 'devices',
        price: 388,
        stock: 51,
        status: 0,
        costPerItem: 12,
        bulkDiscountPrice: 68,
        taxRate: 6,
        tags: ['trend', 'unisex'],
        brand: 'Apple',
        vendor: 'WindForce co, Ltd',
        description:
            '<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><br/><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>',
    },
    {
        id: '23',
        name: 'Antique Analog Watch',
        productCode: 'BIS-023',
        img: '/img/products/product-12.jpg',
        imgList: [
            {
                id: '23-img-0',
                name: 'image-1',
                img: '/img/products/product-12.jpg',
            },
        ],
        category: 'watches',
        price: 599,
        stock: 30,
        status: 0,
        costPerItem: 12,
        bulkDiscountPrice: 68,
        taxRate: 6,
        tags: ['trend', 'unisex'],
        brand: 'Seiko',
        vendor: 'WindForce co, Ltd',
        description:
            '<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><br/><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>',
    },
]
export const tasksTreeData = [
    {
        id: "root_1738200600",
        name: "Reporting",
        time: "30 Jan 2025",
        children: [
            {
                id: '1738200600_1738204200', name: '7 AM to 8 AM',
                children: [
                    {
                        "id": "1738200600_1738204200_01",
                        "name": "Read book",
                        "description": "",
                        "category": '0',
                        "status": "-",
                        "time_spent": "0",
                        "wasted_time": "0",
                        "focus_rate": "0",
                        "satisfaction_rate": '0',
                        "reason_for_satisfaction": "",
                        "notes": ""
                    }
                ]
            },

            {
                id: '1738207800_1738222200', name: '9 AM to 1 PM',
                children: [
                    {
                        "id": "1738207800_1738222200_01",
                        "name": "Management",
                        "description": "add reporting, fresh,account opening",
                        "category": '2',
                        "status": "-",
                        "time_spent": "60",
                        "wasted_time": "0",
                        "focus_rate": "0",
                        "satisfaction_rate": '10',
                        "reason_for_satisfaction": "-",
                        "notes": "-"
                    },
                    {
                        "id": "1738207800_1738222200_02",
                        "name": "Programming",
                        "description": "Bug fixing in modifying tree ",
                        "category": '1',
                        "status": "-",
                        "time_spent": "180",
                        "wasted_time": "0",
                        "focus_rate": "0",
                        "satisfaction_rate": '10',
                        "reason_for_satisfaction": "",
                        "notes": ""
                    },
                ]
            },

            {
                id: '1738222200_1738225800', name: '1 PM to 2 PM',
                children: [
                    {
                        "id": "1738222200_1738225800_01",
                        "name": "eSkill",
                        "description": "presentation",
                        "category": '1',
                        "status": "-",
                        "time_spent": "60",
                        "wasted_time": "0",
                        "focus_rate": "0",
                        "satisfaction_rate": '10',
                        "reason_for_satisfaction": "",
                        "notes": ""
                    },
                ]
            },
            {
                id: '1738225800_1738233000', name: '2 PM to 4 PM',
                children: [
                    {
                        "id": "1738225800_1738233000_01",
                        "name": "DSM",
                        "description": "array,string question, javascript exercise web site search and practice.",
                        "category": '1',
                        "status": "-",
                        "time_spent": "120",
                        "wasted_time": "0",
                        "focus_rate": "0",
                        "satisfaction_rate": '5',
                        "reason_for_satisfaction": "need practice on javascript",
                        "notes": ""
                    },
                ]

            },

            {
                id: '1738233000_1738240200', name: '4 PM to 6 PM',
                children: [
                    {
                        "id": "1738233000_1738240200_01",
                        "name": "-",
                        "description": "indusind bank visit",
                        "category": '0',
                        "status": "-",
                        "time_spent": "60",
                        "wasted_time": "0",
                        "focus_rate": "0",
                        "satisfaction_rate": '0',
                        "reason_for_satisfaction": "dormate account close",
                        "notes": ""
                    },
                ]
            },

            {
                id: '1738240200_1738243800', name: '6 PM to 7 PM',
                children: [
                    {
                        "id": "1738240200_1738243800_01",
                        "name": "Programming",
                        "description": "Testing",
                        "category": '1',
                        "status": "-",
                        "time_spent": "60",
                        "wasted_time": "0",
                        "focus_rate": "0",
                        "satisfaction_rate": '10',
                        "reason_for_satisfaction": "",
                        "notes": ""
                    },
                ]
            },


            {
                id: '1738251000_1738258200', name: '9 PM to 11 PM',
                children: [
                    {
                        "id": "1738251000_1738258200_01",
                        "name": "reading",
                        "description": "vp",
                        "category": '3',
                        "status": "-",
                        "time_spent": "120",
                        "wasted_time": "0",
                        "focus_rate": "0",
                        "satisfaction_rate": '10',
                        "reason_for_satisfaction": "",
                        "notes": ""
                    },
                ]
            },

            {
                id: '1738200600_1738258200', name: 'Notes',
                children: [
                    {
                        "id": "1738200600_1738258200_01",
                        "name": "Notes_1738200600",
                        "time_spent": "960",
                        'exercise': '12',
                        "category": '0',
                        'deep/light sleep': "02:09/3:45",
                        "typing-speed": "547 cpm,740 char,4:18 ct, 3:01 act",

                    },
                ]

            }]
    }
]
export const ordersData = [
    {
        id: '95954',
        date: 1660132800,
        customer: 'Ron Vargas',
        status: 0,
        paymentMehod: 'visa',
        paymentIdendifier: '•••• 6165',
        totalAmount: 168,
    },
    {
        id: '95423',
        date: 1659132800,
        customer: 'Carolyn Hanso',
        status: 0,
        paymentMehod: 'visa',
        paymentIdendifier: '•••• 7128',
        totalAmount: 523,
    },
    {
        id: '92903',
        date: 1658132800,
        customer: 'Gabriella May',
        status: 0,
        paymentMehod: 'paypal',
        paymentIdendifier: '••••@gmail.com',
        totalAmount: 81,
    },
    {
        id: '92627',
        date: 1657332800,
        customer: 'Tara Fletcher',
        status: 0,
        paymentMehod: 'master',
        paymentIdendifier: '•••• 0921',
        totalAmount: 279,
    },
    {
        id: '92509',
        date: 1656232800,
        customer: 'Joyce Freeman',
        status: 1,
        paymentMehod: 'visa',
        paymentIdendifier: '•••• 1232',
        totalAmount: 831,
    },
    {
        id: '91631',
        date: 1655532800,
        customer: 'Brittany Hale',
        status: 0,
        paymentMehod: 'visa',
        paymentIdendifier: '•••• 4597',
        totalAmount: 142,
    },
    {
        id: '90963',
        date: 1654932800,
        customer: 'Luke Cook',
        status: 0,
        paymentMehod: 'master',
        paymentIdendifier: '•••• 3881',
        totalAmount: 232,
    },
    {
        id: '89332',
        date: 1654132800,
        customer: 'Eileen Horton',
        status: 1,
        paymentMehod: 'paypal',
        paymentIdendifier: '••••@gmail.com',
        totalAmount: 597,
    },
    {
        id: '89107',
        date: 1650132800,
        customer: 'Frederick Adams',
        status: 2,
        paymentMehod: 'visa',
        paymentIdendifier: '•••• 3356',
        totalAmount: 72,
    },
    {
        id: '89021',
        date: 1649832800,
        customer: 'Lee Wheeler',
        status: 0,
        paymentMehod: 'master',
        paymentIdendifier: '•••• 9564',
        totalAmount: 110,
    },
    {
        id: '88911',
        date: 1649432800,
        customer: 'Gail Barnes',
        status: 0,
        paymentMehod: 'visa',
        paymentIdendifier: '•••• 1357',
        totalAmount: 59,
    },
    {
        id: '87054',
        date: 1647932800,
        customer: 'Ella Robinson',
        status: 0,
        paymentMehod: 'visa',
        paymentIdendifier: '•••• 3561',
        totalAmount: 238,
    },
    {
        id: '86497',
        date: 1647632800,
        customer: 'Lloyd Obrien',
        status: 2,
        paymentMehod: 'visa',
        paymentIdendifier: '•••• 0443',
        totalAmount: 189,
    },
    {
        id: '86212',
        date: 1646832800,
        customer: 'Tara Fletcher',
        status: 0,
        paymentMehod: 'paypal',
        paymentIdendifier: '••••@gmail.com',
        totalAmount: 672,
    },
]

export const orderDetailsData = [
    {
        id: '95954',
        progressStatus: 0,
        payementStatus: 0,
        dateTime: 1646396117,
        paymentSummary: {
            subTotal: 1762,
            tax: 105.72,
            deliveryFees: 15,
            total: 1870.72,
        },
        shipping: {
            deliveryFees: 15,
            estimatedMin: 1,
            estimatedMax: 3,
            shippingLogo: '/img/others/img-11.jpg',
            shippingVendor: 'FedEx',
        },
        activity: [
            {
                date: 1646554397,
                events: [
                    {
                        time: 1646554397,
                        action: 'Parcel has been delivered',
                        recipient: 'Lloyd Obrien',
                    },
                    {
                        time: 1646537537,
                        action: 'Parcel is out for delivery',
                    },
                    {
                        time: 1646529317,
                        action: 'Parcel has arrived at delivery station',
                    },
                ],
            },
            {
                date: 1646442017,
                events: [
                    {
                        time: 1646462597,
                        action: 'Parcel has been picked up by courier',
                    },
                    {
                        time: 1646537537,
                        action: 'Seller is preparing to ship your parcel',
                    },
                ],
            },
        ],
        product: [
            {
                id: '13',
                name: 'White Backpack',
                productCode: 'BIS-013',
                img: '/img/products/product-2.jpg',
                price: 252,
                quantity: 2,
                total: 504,
                details: {
                    color: ['White'],
                    size: ['One size'],
                },
            },
            {
                id: '18',
                name: 'Strip Analog Watch',
                productCode: 'BIS-018',
                img: '/img/products/product-7.jpg',
                price: 389,
                quantity: 1,
                total: 389,
                details: {
                    color: ['Red'],
                    gender: ['Unisex'],
                },
            },
            {
                id: '19',
                name: 'Beats Solo Headphone',
                productCode: 'BIS-019',
                img: '/img/products/product-8.jpg',
                price: 869,
                quantity: 1,
                total: 869,
                details: {
                    color: ['Red'],
                },
            },
        ],
        customer: {
            name: 'Lloyd Obrien',
            email: 'handsome-obrien@hotmail.com',
            phone: '+1 (541) 754-3010',
            img: '/img/avatars/thumb-11.jpg',
            previousOrder: 11,
            shippingAddress: {
                line1: '100 Main ST',
                line2: 'PO Box 1022',
                line3: 'Seattle WA 98104',
                line4: 'United States of America',
            },
            billingAddress: {
                line1: '1527 Pond Reef Rd',
                line2: 'Ketchikan',
                line3: 'Alaska 99901',
                line4: 'United States of America',
            },
        },
    },
]
