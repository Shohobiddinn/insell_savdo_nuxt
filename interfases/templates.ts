export interface ServiceType {
    img: string;
    text: string;
}
export const templates: Ref<ServiceType[]> = ref([
    {
        img: "/images/ball.svg",
        text: "Sport buyumlari va kiyimlari",
    },
    {
        img: "/images/Bolt.svg",
        text: "Furnitura",
    },
    {
        img: "/images/book.svg",
        text: "Konstavar va kitob",
    },
    {
        img: "/images/Car service.svg",
        text: "Avtomobil ehtiyot qisimlari",
    },
    {
        img: "/images/Carpet.svg",
        text: "Gilam",
    },
    {
        img: "/images/couch.svg",
        text: "Mebel",
    },
    {
        img: "/images/gift.svg",
        text: "Gul va buketlar",
    },
    {
        img: "/images/laptop-solid 1.svg",
        text: "Kompyuter",
    },
    {
        img: "/images/mobile-solid 1.svg",
        text: "Telefon",
    },
    {
        img: "/images/paint.svg",
        text: "Xo'jalik mollari",
    },
    {
        img: "/images/Parmacy.svg",
        text: "Apteka",
    },
    {
        img: "/images/shirt-solid 1.svg",
        text: "Kiyim kechak",
    },
    {
        img: "/images/Silk.svg",
        text: "Material",
    },
    {
        img: "/images/Washshing.svg",
        text: "Maishiy texnika",
    },


])
export interface tradeTypes {
    title: string
}
export const Trade: Ref<tradeTypes[]> = ref([
    {
        title: 'Dori Darmon savdosi.'
    },
    {
        title: 'Mato savdosi'
    },
    {
        title: 'Attorlik mahsulotlari savdosi.'
    },
    {
        title: 'Oziq ovqat mahsulorlari. '
    },
    {
        title: 'Xo’jalik Mollari savdosi.'
    },
    {
        title: 'Gilam savdosi.'
    },
    {
        title: 'Telefon aksesuar savdosi.'
    },
    {
        title: 'Komputer Texnika savdosi.'
    },
    {
        title: 'Maishiy Texnika savdosi.'
    },
    {
        title: 'Gul buket savdosi.'
    },
    {
        title: 'Mebel savdosi.'
    },
    {
        title: 'Kiyim Kechak savdosi.'
    },
    {
        title: 'Avtomobil ehtiyot qismlari savdosi.'
    },
    {
        title: 'Kitob va konstavar savdosi.'
    },
    {
        title: 'Sport jihozlari savdosi.'
    },
])