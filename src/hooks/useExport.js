import axios from 'axios';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { downloadFile } from '../downloadFile';

export default function useExport(fileName, url) {
  const isLoading = ref(false);

  const store = useStore();

  const fetcher = () =>
    axios.get(url, {
      responseType: 'arraybuffer'
    });

  const run = async () => {
    isLoading.value = true;

    const response = await fetcher();

    if (response.status === 204) {
      store.commit('addNotification', 'Файл будет отправлен на email.');
    } else {
      downloadFile(fileName, response.data);
    }

    isLoading.value = false;
  };

  return {
    isLoading,
    run
  };
}
