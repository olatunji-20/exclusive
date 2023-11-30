<template>
  <div class="count">
    <DateCountdown v-slot="date" :end-date="Date.now() + day" class="ddd">
      <div class="sub-ddd">
        <h3>{{ date.days }}</h3>
        <p>days</p>
      </div>
      <div class="sub-ddd">
        <h3>{{ date.hours }}</h3>
        <p>hours</p>
      </div>
      <div class="sub-ddd">
        <h3>{{ date.minutes }}</h3>
        <p>minutes</p>
      </div>
      <div class="sub-ddd">
        <h3>{{ date.seconds }}</h3>
        <p>seconds</p>
      </div>
    </DateCountdown>
  </div>
</template>

<script>
import { ref } from "vue";
import { DateCountdown } from "vue-date-countdown";
export default {
  name: "CountDown",
  setup() {
    const day = ref(758000000);

    return {
      day,
    };
  },
  components: {
    DateCountdown,
  },
};
</script>

<style scoped>
.count {
  width: 100%;
  height: 100%;
  color: #404040;
}
.ddd {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.sub-ddd {
  width: 4.0625rem;
  height: 100%;
  text-align: center;
  border-radius: 50%;
  background: #f5f5f5;
}
.sub-ddd h3 {
  font-size: 1.5625rem;
  line-height: 0px;
}
.sub-ddd p {
  font-size: 0.625rem;
  line-height: 0px;
}
</style>