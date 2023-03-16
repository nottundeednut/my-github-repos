<template>
    <h1>Repostories</h1>
    <div v-if="repositories.length">
        <div v-for="repository in repositories" :key="repository.id">
            <router-link :to="{ name: 'RepositoryDetails', params: { id: repository.id } }">
                <h2>{{ repository.name }}</h2>
            </router-link>
        </div>
    </div>
    <div v-else>
        <p>Loading repositories...</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            repositories: [],
        };
    },
    mounted() {
        fetch("https://api.github.com/users/nottundeednut/repos")
            .then((res) => res.json())
            .then((data) => (this.repositories = data))
            // .then((data) => console.log(data))
            .catch(err => console.log(err.message));
    },
};
</script>

<style></style>