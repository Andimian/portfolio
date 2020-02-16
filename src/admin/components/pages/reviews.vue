<template lang="pug">
    .reviews
        routeInfo(
            pageTitle="Отзывы"
        )
        .container.reviews__container
            .reviews__add-review
                transition(
                    name='card'
                )
                    Card(
                        modifier="full-size"
                        title="Новый отзыв"
                        v-if="addReviewMode"
                    )
                        .add-review
                            .add-review__container
                                .add-review__avatar-block
                                    .add-review__author-photo(
                                        :style='reviewsImage'
                                    )
                                    .add-review__add-photo-btn
                                        label(
                                            class="btn btn--blue-color"
                                        ) Добавить фото
                                            input(
                                                type="file"
                                                class="add-review__file-input"
                                                @change="getPhotoUrl"
                                            )
                                .add-review__desc-block
                                    .add-review__desc-row
                                        .add-review__input-block
                                            label(for="author-name").add-review__label Имя автора
                                            input.add-review__input.add-review__input-name#author-name(
                                                v-model="review.author"
                                            )
                                        
                                        .add-review__input-block
                                            label(for="author-position").add-review__label Титут автора
                                            input.add-review__input.add-review__input--position#author-position(
                                                v-model="review.occ"
                                            )

                                    .add-review__desc-row
                                        .add-review__input-block
                                            label(for="author-review").add-review__label Отзыв
                                            textarea.add-review__input.add-review__input--text#author-review(
                                                placeholder="Текст отзыва"
                                                v-model="review.text"
                                            )
                                .add-review__footer
                                    .add-review__footer-btn
                                        button.btn.btn--cancel(
                                            @click="addReviewMode = false"
                                        )
                                            | Отменить
                                    
                                    .add-review__footer-btn
                                        button.btn.btn--gradient(
                                            @click="addReview"
                                        )
                                            | Сохранить
                transition(
                        name='card'
                    )
                        Card(
                            modifier="full-size"
                            title="Редактировать"
                            v-if="editMode"
                        )
                            .add-review
                                .add-review__container
                                    .add-review__avatar-block
                                        .add-review__author-photo(
                                            :style='reviewsImage'
                                        )
                                        .add-review__add-photo-btn
                                            label(
                                                class="btn btn--blue-color"
                                            ) Добавить фото
                                                input(
                                                    type="file"
                                                    class="add-review__file-input"
                                                    @change="createFormData"
                                                )
                                    .add-review__desc-block
                                        .add-review__desc-row
                                            .add-review__input-block
                                                label(for="author-name").add-review__label Имя автора
                                                input.add-review__input.add-review__input-name#author-name(
                                                    v-model="editedSkill.author"
                                                )
                                            
                                            .add-review__input-block
                                                label(for="author-position").add-review__label Титут автора
                                                input.add-review__input.add-review__input--position#author-position(
                                                    v-model="editedSkill.occ"
                                                )

                                        .add-review__desc-row
                                            .add-review__input-block
                                                label(for="author-review").add-review__label Отзыв
                                                textarea.add-review__input.add-review__input--text#author-review(
                                                    placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"
                                                    v-model="editedSkill.text"
                                                )
                                    .add-review__footer
                                        .add-review__footer-btn
                                            button.btn.btn--cancel(
                                                @click="editMode = false"
                                            )
                                                | Отменить
                                        
                                        .add-review__footer-btn
                                            button.btn.btn--gradient(
                                                @click="changeReview(editedSkill)"
                                            )
                                                | Сохранить

            
            
            
            .reviews__reviews-container
                transition-group(
                    tag="ul"
                    class="reviews__reviews-list"
                    name="card"
                )
                    li.reviews__reviews-item(
                        key="add-btn-card"
                    )
                        add-btn(
                            size="card"
                            name="Добавить работу"
                            @addBtnHandler="setMode('add')"
                        )
                    
                    li.reviews__reviews-item(
                        v-for="(review, index) in reviews"
                        :key="index"
                    )
                        reviewItem(
                            :author="review.author"
                            :occ="review.occ"
                            :text="review.text"
                            :photo="review.photo"
                            :id="review.id"
                            @deleteCurrentReview="deleteCurrentReview"
                            @editReview="showEditForm"
                        )
                        
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
	components: {
		Card: () => import("components/Card.vue"),
		addBtn: () => import("components/AddBtn.vue"),
		routeInfo: () => import("components/Route.vue"),
		reviewItem: () => import("components/reviewItem.vue")
	},
	data() {
		return {
            url: '',
            review: {
                photo: '',
                author: '',
                occ: '',
                text: ''
            },
            addReviewMode: false,
            editMode: false,
            editedSkill: {
                photo: '',
                author: '',
                occ: '',
                text: '',
                id: ''
            }
        }
	},
    computed: {
        ...mapState('reviews',{
            reviews: (state) => state.reviews
        }),
        reviewsImage: function () {
            return {'backgroundImage' : `url(${this.url})`}
        }
    },
    methods: {
        ...mapActions('reviews', ['fetchReviews', 'createReview', 'removeReview', 'editReview']),
        getBase64(file) {
            this.review.photo = file;
            return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
            });
        },
        setMode(mode) {
            switch(mode) {
                case 'add' :
                this.addReviewMode = true;
                this.editMode = false;
                break;

                case 'edit' :
                this.editMode = true;
                this.addReviewMode = false;
                break;
            }
        },
        setEditedSkill(review) {
            const {author, text, occ, id} = review;
            this.editedSkill.author = author;
            this.editedSkill.text = text;
            this.editedSkill.occ = occ;
            this.editedSkill.id = id;
            
        },
        createFormData(review) {
            const formData = new FormData();
            formData.append('text', review.text)
            formData.append('author', review.author)
            formData.append('occ', review.occ)
            formData.append('photo', review.photo)

            return formData
        },
        resetNewReview() {
            this.review.photo = '';
            this.review.author = '';
            this.review.occ = '';
            this.review.text = '';
            this.url = ''
        },
        async addReview() {
            try {
                const formData = this.createFormData(this.review);
                const response = await this.createReview(formData);
                await this.resetNewReview()
                await this.fetchReviews();
            } catch (error) {
                
            }
        },
        async getPhotoUrl(e) {
            try {
                const result = await this.getBase64(e.target.files[0]);
                    this.url = result;
            } catch (error) {
            }
        },
        async deleteCurrentReview(id) {
            try {
                await this.removeReview(id);
            } catch (error) {
                console.log('error.message', error.message);
            }
        },
        async showEditForm(review) {
            try {
                this.setMode('edit');
                await this.setEditedSkill(review);
            } catch (error) {
                
            }
        },
        async changeReview(editedReview) {
            try {
                await this.editReview(editedReview);
                this.editMode = false;
            } catch (error) {
                
            }
        }
    },
    async created() {
        try {
            await this.fetchReviews()
        } catch (error) {
            
        }
    }
}
</script>

<style lang="postcss" scoped>
.card-enter-active, .card-leave-active {
    transition: opacity .6s ease, transform .6s ease;
}

.card-enter {
    opacity: 0;
    transform: scale(0);
}

.card-enter-to {
    opacity: 1;
    transform: scale(1);
}

.card-leave {
    opacity: 1;
    transform: scale(1);
}

.card-leave-to {
    opacity: 0;
    transform: scale(0);
}
</style>


