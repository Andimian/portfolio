<template lang="pug">
    section.works
        route-info(
            pageTitle="Работы"
        )
        .container.works__container
            transition(
                name="card"
            )
                Card(
                    modifier="full-size"
                    title="Добавление работы"
                    type="add"
                    v-if="addWorkMode"
                )
                    .add-work
                        .add-work__container
                            .add-work__side.add-work__side--image
                                .add-work__add-image-container(
                                    v-if="!newWork.photo"
                                )
                                    |Перетащите или загрузите
                                    br
                                    |для загрузки изображения

                                    .add-work__add-image-btn
                                        label.btn.btn--gradient(for="work-image") Загрузить
                                        input(
                                            type="file"
                                            @change="getPhotoUrl"
                                            id="work-image"
                                            class="add-work__image-input"
                                        )
                                .add-work__change-image-container(
                                    v-else
                                )
                                    .add-work__work-image(:style='workImage')
                                    
                                    label.add-work__change-image-btn Изменить превью
                                        input(type="file").add-work__image-input(
                                            @change="getPhotoUrl"
                                        )

                            .add-work__side.add-work__side--descriptions                    
                                .add-work__input-block
                                    label(for="work-name").add-work__input-label Название
                                    input.add-work__input#work-name(
                                        v-model="newWork.title"
                                    )

                                .add-work__input-block
                                    label(for="work-link").add-work__input-label Ссылка
                                    input.add-work__input#work-link(
                                        v-model="newWork.link"
                                    )
                            
                                .add-work__input-block
                                    label(for="work-desc").add-work__input-label Описание
                                    textarea.add-work__input.add-work__input--area#work-desc(
                                        v-model="newWork.description"
                                    )
                                
                                .add-work__input-block
                                    label(for="work-tags").add-work__input-label Добавление тегов
                                    input.add-work__input#work-tags(
                                        v-model="newWork.techs"
                                        @input="watchTags"
                                    )
                                    .add-work__tags-container
                                        .add-work__tag(
                                            v-for="tag in newWorkTags"
                                        )
                                            tag(
                                                :title="tag"
                                            )
                            
                            .add-work__footer
                                .add-work__footer-btn
                                    button.btn.btn--cancel(
                                        @click="addWorkMode = false"
                                    ) Отменить
                                .add-work__footer-btn
                                    button.btn.btn--gradient(
                                        @click="createWork(newWork)"
                                    ) Сохранить
            transition(
                    name="card"
                )
                    Card(
                        modifier="full-size"
                        title="Редактирование работы"
                        type="add"
                        v-if="editMode"
                    )
                        .add-work
                            .add-work__container
                                .add-work__side.add-work__side--image
                                    .add-work__change-image-container
                                        .add-work__work-image(:style='editableWorkPhoto')
                                        
                                        label.add-work__change-image-btn Изменить превью
                                            input(type="file").add-work__image-input(
                                                @change="getEditablePhotoUrl"
                                            )

                                .add-work__side.add-work__side--descriptions                    
                                    .add-work__input-block
                                        label(for="work-name").add-work__input-label Название
                                        input.add-work__input#work-name(
                                            v-model="editableWork.title"
                                        )

                                    .add-work__input-block
                                        label(for="work-link").add-work__input-label Ссылка
                                        input.add-work__input#work-link(
                                            v-model="editableWork.title"
                                        )
                                
                                    .add-work__input-block
                                        label(for="work-desc").add-work__input-label Описание
                                        textarea.add-work__input.add-work__input--area#work-desc(
                                            v-model="editableWork.description"
                                        )
                                    
                                    .add-work__input-block
                                        label(for="work-tags").add-work__input-label Добавление тегов
                                        input.add-work__input#work-tags(
                                            v-model="editableWork.techs"
                                            @input="watchTags('edit')"
                                        )
                                        .add-work__tags-container
                                            .add-work__tag(
                                                v-for="tag in editableWork.taglist "
                                            )
                                                tag(
                                                    :title="tag"
                                                )
                                
                                .add-work__footer
                                    .add-work__footer-btn
                                        button.btn.btn--cancel(
                                            @click="addWorkMode = false"
                                        ) Отменить
                                    .add-work__footer-btn
                                        button.btn.btn--gradient(
                                            @click="saveEditableWork"
                                        ) Сохранить

            .works__works-container 
                transition-group(
                    tag="ul"
                    class="works__works-list"
                    name="card"
                )
                    li.works__work-item(
                        key="add-work-btn"
                    )
                        add-btn(
                            size="card"
                            name="Добавить работу"
                            @addBtnHandler="setMode('add')"
                        )

                    li.works__work-item(
                        v-for="work in works"
                        :key="work.id"
                    )
                        workItem(
                            :work="work"
                            @removeWork="removeCurrentWork"
                            @editWork="changeCurrentWork"
                        )
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    components: {
        addBtn: () => import('components/addBtn.vue'),
        Card: () => import('components/Card.vue'),
        routeInfo: () => import('components/Route.vue'),
        tag: () => import('components/Tag.vue'),
        workItem: () => import('components/workItem')
    },
    data() {
        return {
            addWorkMode: false,
            editMode: false,
            newWork: {
                title: '',
                techs: '',
                photo: '',
                link: '',
                description: '',
            },
            editableWork: {
                title: '',
                techs: '',
                photo: '',
                link: '',
                description: ''
            },
            photoUrl: '',
            newWorkTags: []
        }
    },
    computed: {
        ...mapState('works', {
            works: (state) => state.works
        }),
        workImage: function () {
            return {'backgroundImage' : `url(${this.photoUrl})`}
        },
        editableWorkPhoto: function () {
            console.log(this.editableWork.photo);
            const
                template = /uploads/g, 
                result = typeof this.editableWork.photo != 'object' && !this.editableWork.photo.match(template) ? {'backgroundImage' : `url(${this.editableWork.photo})`} : {'backgroundImage' : `url(https://webdev-api.loftschool.com/${this.editableWork.photo})`};
            return result;
        },
    },
    methods: {
        ...mapActions('works', ['fetchWork', 'addWork', 'removeWork', 'changeWork']),
        setMode(mode) {
            switch(mode) {
                case 'add' :
                this.addWorkMode = true;
                this.editMode = false;
                break;

                case 'edit' :
                this.editMode = true;
                this.addWorkMode = false;
                break;
                
                case 'default' :
                this.editMode = false;
                this.addWorkMode = false;
                break;
            }
        },
        resetAddForm() {
            this.newWork.title = ''
            this.newWork.techs = ''
            this.newWork.photo = ''
            this.newWork.link = ''
            this.newWork.description = ''
        },
        watchTags(mode) {
            if( mode === 'edit') {
                console.log('true', true);
                this.editableWork.taglist = this.editableWork.techs.split(' ');
            } else {
                this.newWorkTags = this.newWork.techs.split(' ');
            }
        },
        getBase64(file) {
            try {
                this.newWork.photo = file;
                return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
                });
            } catch (error) {
                console.log('error.message', error.message);
            }
        },
        createFormData(work) {
            try {
                const formData = new FormData();
                formData.append('title', work.title)
                formData.append('techs', work.techs)
                formData.append('link', work.link)
                formData.append('photo', work.photo)
                formData.append('description', work.description)
                if(work.id) {
                    formData.append('id', work.id)
                }

                return formData
            } catch (error) {
                console.log('error.message', error.message);
            }
        },
        async getPhotoUrl(e) {
            try {
                const result = await this.getBase64(e.target.files[0]);
                this.photoUrl = result;
            } catch (error) {
                console.log('error.message', error.message);
            }
        },
        async getEditablePhotoUrl(e) {
            try {
                const result = await this.getBase64(e.target.files[0]);
                this.editableWork.photo = e.target.files[0];
            } catch (error) {
                console.log('error', error);
            }
        },
        async createWork(workObj) {
            try {
                const work = await this.createFormData(workObj);
                const response = await this.addWork(work);
                await this.fetchWork();
                await this.resetAddForm();
                this.setMode('default')
            } catch (error) {
                console.log('error.message', error.message);
            }
        },
        async removeCurrentWork(id) {
            try {
                await this.removeWork(id);
                await this.fetchWork()
            } catch (error) {
                
            }
        },
        setEditableWork(work) {
            this.editableWork.id = work.id;
            this.editableWork.title = work.title;
            this.editableWork.techs = work.techs;
            this.editableWork.photo = work.photo;
            this.editableWork.link = work.link;
            this.editableWork.description = work.description;
        },
        async changeCurrentWork(work) {
            try {
                await this.setEditableWork(work);
                await this.setMode('edit')
            } catch (error) {
                
            }
        },
        async saveEditableWork() {
            try {
                this.setMode('default')
                const data = await this.createFormData(this.editableWork)
                await this.changeWork(this.editableWork);
                await this.fetchWork()
            } catch (error) {
                
            }
        }
    },
    async created() {
        try {
            await this.fetchWork();
        } catch (error) {
            console.log('error.message', error.message);
        }
    },
    async updated() {
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
