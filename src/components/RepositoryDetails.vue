<template>
    <div v-if="repository">
        <h1>{{ repository.id }}</h1>
        <p>{{ repository.name }}</p>
        <p>{{ repository.html_url }}</p>
        <p>{{ repository.language }}</p>
        <p>{{ repository.owner.login }}</p>
    </div>
    <div v-else>
        <p>Loading repository details...</p>
    </div>
</template>
  
<script>
export default {
    props: ["id"],
    data() {
        return {
            repository: null
        };
    },
    mounted() {
        fetch("https://api.github.com/users/nottundeednut/repos/" + this.id)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => this.repository = data)
            .catch(err => console.log(err.message));
    }
};
</script>
  
<style></style>