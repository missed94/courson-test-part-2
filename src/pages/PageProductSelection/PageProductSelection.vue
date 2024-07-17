<template>
  <div class="product-selection-page p-4">
    <BaseStepper title="Шаг 1: Выбор товаров" :currentStep="1">
      <div>
        <ul class="list-group mb-2">
          <ProductSelectionItem
            v-for="product in products"
            :key="product.id"
            :name="product.name"
            :description="product.description"
            :price="product.price"
            :quantity="product.quantity"
            :selected="product.selected"
            :img="product.image"
            @select="toggleProductSelection(product.id)"
            @setQuantity="
              (v) =>
                updateProductQuantity({
                  productId: product.id,
                  quantity: v,
                })
            "
          />
        </ul>
        <div class="mb-5">
          <strong>Итоговая стоимость: {{ totalCost }} руб.</strong>
        </div>
        <router-link to="/step2" class="btn btn-primary">Далее</router-link>
      </div>
    </BaseStepper>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import BaseStepper from "@/components/BaseStepper";
import ProductSelectionItem from "./components/ProductSelectionItem";

export default {
  name: "PageProductSelection",
  components: {
    BaseStepper,
    ProductSelectionItem,
  },
  computed: {
    ...mapGetters(["products"]),
    totalCost() {
      return this.products.reduce((sum, product) => {
        return product.selected ? sum + product.price * product.quantity : sum;
      }, 0);
    },
  },
  methods: {
    ...mapMutations(["updateProductQuantity", "toggleProductSelection"]),
  },
};
</script>
