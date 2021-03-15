<template>
  <div class="friends-panel">
    <article class="panel">
        <p class="panel-heading">
            Find Friends
        </p>
        <p class="ptabs">
            <a>My Friends</a>
            <a>Groups</a>
            <a>Chat</a>
        </p>
        <div class="panel-block search">
            <p class="control has-icons-left">
            <input class="input" type="search" placeholder="Search" v-model="handle">
            <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            </p>
        </div>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-user-friends" aria-hidden="true"></i>
            </span>
            John Doe
        </a>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-user-friends" aria-hidden="true"></i>
            </span>
            Jane Doe
        </a>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-user-friends" aria-hidden="true"></i>
            </span>
            Jack Doe
        </a>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-user-friends" aria-hidden="true"></i>
            </span>
            
        </a>
    </article>
  </div>
</template>

<script>
export default {
    
}
</script>