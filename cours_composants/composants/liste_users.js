const liste_users = {
    template: `
    <h2 :class="custom_class">{{ titre }}</h2>
    <slot name="input_recherche_user"></slot>
    <section class="d-flex mt-3">
        <div class="card ms-2" style="width: 18rem;" v-for="user in listusers">
            <img :src="user.picture.large" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{ user.name.first }} {{ user.name.last }}</h5>
                <p class="card-text">De {{ user.location.city }}</p>
            </div>
        </div>
    </section>
    `,
    props:['listusers','titre','custom_class']
}