import { defineStore } from "pinia";
import { ref } from 'vue';
import { computed } from 'vue';

export const productStore = defineStore('product', () => {

    const load_product = computed(() => productList.value.length > 0 )
    
    const productList = ref([
    { 
    id: 1, name: 'Tranquil Chamomile', price:150 ,
    img: "https://img.freepik.com/premium-photo/chamomile-tea-transparent-mug-with-natural-small-chamomile-flowers_351987-355.jpg",
    type: "Black Tea",
    detail:'A soothing herbal infusion crafted with the finest chamomile blossoms. Known for its calming properties, this tea offers a delicate, floral aroma and a mellow, honey-like flavor, making it the perfect choice for relaxation and winding down.'
    },{ 
    id: 2, name: 'Zen Green Harmony',price:189,
    img: "https://assets.epicurious.com/photos/5887d21b5f76684c78cf57db/4:3/w_2384,h_1788,c_limit/green_tea_24012017.jpg",
    type: "Green Tea",
    detail:'A harmonious blend of premium green teas from various regions, carefully curated to create a balanced and refreshing cup. With grassy notes and a hint of sweetness, this tea embodies the essence of Zen, providing a moment of serenity in every sip.'
    },{ 
    id: 3, name: 'Earl Grey Elegance Tea',price:120,
    img: "https://brodandtaylor.com/cdn/shop/articles/dehydrated-tea-thumb_grande.jpg?v=1639765759",
    type: "Herbal Tea",
    detail:'An elegant black tea infused with bergamot oil, Earl Grey Elegance is a classic and timeless blend. The citrusy notes of bergamot beautifully complement the rich and robust black tea base, resulting in a sophisticated and flavorful cup.'
    },{ 
    id: 4, name: 'Moroccan Mint Medley',price:169,
    img: "https://www.liveeatlearn.com/wp-content/uploads/2020/07/moroccan-mint-tea-vert-500x375.jpg",
    type: "Oolong Tea",
    detail:'Experience the invigorating blend of green tea and fresh mint leaves inspired by the traditional Moroccan mint tea. This refreshing and revitalizing infusion offers a perfect balance of cool mintiness and the grassy undertones of green tea.'
    },{ 
    id: 5, name: 'Himalayan High Chai',price:149,
    img: "https://cdn.shopify.com/s/files/1/0533/6743/9558/t/5/assets/feature_whatiswhitetea-1648138108147.jpg?v=1648138110",
    type: "White Tea",
    detail:'A bold and robust chai blend featuring black tea leaves from the Himalayan foothills. Infused with a medley of spices such as cardamom, cinnamon, and cloves, this tea delivers a warm and invigorating flavor that embodies the spirit of traditional chai.'
    },{ 
    id: 6, name: 'Jasmine Dream Delight',price:159,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/%22Da_Yi_Gong_Tuo%22_Pu-erh_shou_cha%2C_2010.jpg/1200px-%22Da_Yi_Gong_Tuo%22_Pu-erh_shou_cha%2C_2010.jpg",
    type: "Pu-erh Tea",
    detail:'Immerse yourself in the enchanting aroma of jasmine blossoms with this delicate green tea blend. The floral notes of jasmine gracefully complement the smooth and subtle green tea base, creating a dreamy and aromatic experience.'
    },{ 
    id: 7, name: 'Raspberry Rooibos',price:249,
    img: "https://www.stashtea.com/cdn/shop/articles/DirtyChai_Recipe_1024x1024.jpg?v=1676568196",
    type: "Chai Tea",
    detail:'A caffeine-free infusion that combines the earthy richness of rooibos with the sweet and tart notes of ripe raspberries. This vibrant and fruity blend offers a delightful burst of flavor, perfect for a cozy evening or as an uplifting iced tea.'
    },{ 
    id: 8, name: 'English Breakfast Bold',price:239,
    img: "https://cdn.shopify.com/s/files/1/0533/6743/9558/t/5/assets/articleheaderredbushrooibosafricanredteaexplained-1648722249326_1200x.jpg?v=1648722251",
    type: "Rooibos Tea",
    detail:'A robust and full-bodied black tea blend that embodies the traditional English Breakfast experience. With a strong and malty flavor profile, this tea is perfect for those who appreciate a hearty and invigorating cup to kickstart their day.'
    },{ 
    id: 9, name: 'Hot Hojicha',price:299,
    img: "https://m.media-amazon.com/images/I/71VdA1acPcL.jpg",
    type: "Flowering Tea (Blooming Tea)",
    detail:'Indulge in a calming and aromatic blend of lavender and zesty lemon. This herbal infusion combines the soothing properties of lavender with the citrusy brightness of lemon, creating a serene and uplifting tea that can be enjoyed any time of the day.'
    },{ 
    id: 10, name: 'Fruit Infusion',price:299,
    img: "https://sakiproducts.com/cdn/shop/articles/20221031112901-oolong-tea-recipe_98aeef4f-4c3e-4958-a358-0fbf28eddb72_800x800.jpg?v=1667216317",
    type: "Oolong Tea",
    detail:'Pure and invigorating, Peppermint Perfection is a refreshing herbal tea that features the cool and minty essence of peppermint leaves. This caffeine-free option is known for its digestive properties and is ideal for a soothing and minty pick-me-up.'
    },{ 
    id: 11, name: 'Yellow Tea',price:199,
    img: "https://www.greendna.in/cdn/shop/products/assam_3a67e0e5-d62d-4549-a3b6-a4b30334d5b3_600x.jpg?v=1629740325",
    type: "Assam Tea",
    detail:'A rare and delicate tea with a longer oxidation process than green tea but shorter than oolong. It has a mellow flavor with hints of sweetness.'
    },{ 
    id: 12, name: 'Darjeeling Tea',price:399,
    img: "https://hashtaglegend.com/wp-content/uploads/2022/06/Tea-WG-Darjeeling-HK.jpg",
    type: "Oolong Tea",
    detail:'A type of black tea grown in the Darjeeling region of India. Known as the "Champagne of Teas," Darjeeling tea has a unique muscatel flavor with floral and fruity notes.'
    },
    ]);

    return {productList, load_product }

});